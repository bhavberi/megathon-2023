import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer

from joblib import dump, load

from tqdm import tqdm
import nltk
from nltk.stem import WordNetLemmatizer

nltk.download('wordnet', download_dir='./datasets')
    
from nltk.corpus import wordnet

nltk.download('stopwords', download_dir='./datasets')

nltk.data.path.append('./datasets')
    
from nltk.corpus import stopwords

import re
from sklearn.model_selection import train_test_split

class Lemmatizer(object):
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()

    def __call__(self, sentence):
        return [self.lemmatizer.lemmatize(word) for word in sentence.split() if len(word)>2]


def convertToBinary(ls):
    output = []
    for i in ls:
        temp_list = list(bin(i).replace("0b", ""))
        for j in range(len(temp_list)):
            temp_list[j] = int(temp_list[j])
        temp_list = [0]*(4 - len(temp_list)) + temp_list
        output.append(temp_list)
    return output

def returnLabel(ls):
    output = ""
    if(ls[0] == 0):
        output += 'e'
    else:
        output += 'i'
    if(ls[1] == 0):
        output += 'n'
    else:
        output += 's'
    if(ls[2] == 0):
        output += 'f'
    else:
        output += 't'
    if(ls[3] == 0):
        output += 'j'
    else:
        output += 'p'
    return output

def sampling(mode, df, col_name, class_names, count):
    dfs = []
    for class_name in class_names:
        if mode == 'under':
            df_class = df[df[col_name] == class_name]
            if len(df_class) > count:
                df_class = df_class.sample(count, replace=False)
            dfs.append(df_class)
        elif mode == 'over':
            df_class = df[df[col_name] == class_name]
            if len(df_class) < count:
                df_class = df_class.sample(count, replace=True)
            dfs.append(df_class)
    dfs = pd.concat(dfs)
    df_x = df[~df[col_name].isin(class_names)]
    return pd.concat([dfs,df_x])

def get_train(train_data):
    
    X_train = np.vstack(np.array(train_data.posts))
    y_train = np.array(train_data.type)
    
    return X_train, y_train


def clear_text_pred(df):
    data_length=[]
    lemmatizer=WordNetLemmatizer()
    cleaned_text=[]
    stop_words = set(stopwords.words('english')) # Load stop words
    pers_types = ['INFP' ,'INFJ', 'INTP', 'INTJ', 'ENTP', 'ENFP', 'ISTP' ,'ISFP' ,'ENTJ', 'ISTJ','ENFJ', 'ISFJ' ,'ESTP', 'ESFP' ,'ESFJ' ,'ESTJ']
    pers_types = [p.lower() for p in pers_types]
    
    print("Cleaning The Dataset")
    for sentence in tqdm(df):
        
        sentence=sentence.lower()
        
        sentence=re.sub('https?://[^\s<>"]+|www\.[^\s<>"]+',' ',sentence)
        
        sentence=re.sub('[^0-9a-z]',' ',sentence)
        
        sentence = " ".join([word for word in sentence.split() if word not in stop_words]) # Remove stop words
        #print(len(sentence))
        
        for p in pers_types:
            sentence = re.sub(p, '', sentence)
        #print(len(sentence))
        
        sentence = lemmatizer.lemmatize(sentence) # Lemmatize words
        
        data_length.append(len(sentence.split())) #Split data, measure length of new filtered data
        
        cleaned_text.append(sentence)
        
    return cleaned_text,data_length

def clear_text(df):
    data_length=[]
    lemmatizer=WordNetLemmatizer()
    cleaned_text=[]
    stop_words = set(stopwords.words('english')) # Load stop words
    pers_types = ['INFP' ,'INFJ', 'INTP', 'INTJ', 'ENTP', 'ENFP', 'ISTP' ,'ISFP' ,'ENTJ', 'ISTJ','ENFJ', 'ISFJ' ,'ESTP', 'ESFP' ,'ESFJ' ,'ESTJ']
    pers_types = [p.lower() for p in pers_types]
    
    print("Cleaning The Dataset")
    for sentence in tqdm(df.posts):
        
        sentence=sentence.lower()
        
        sentence=re.sub('https?://[^\s<>"]+|www\.[^\s<>"]+',' ',sentence)
        
        sentence=re.sub('[^0-9a-z]',' ',sentence)
        
        sentence = " ".join([word for word in sentence.split() if word not in stop_words]) # Remove stop words
        #print(len(sentence))
        
        for p in pers_types:
            sentence = re.sub(p, '', sentence)
        #print(len(sentence))
        
        sentence = lemmatizer.lemmatize(sentence) # Lemmatize words
        
        data_length.append(len(sentence.split())) #Split data, measure length of new filtered data
        
        cleaned_text.append(sentence)
        
    return cleaned_text,data_length


def vectorize(df, vectorizer):
    df, length = clear_text_pred(df)
    #Applying Tfidf Vectorization
    print("Applying Tfidf Vectorization")
        
    #Applying the vectorizer transform
    train_post=vectorizer.transform(df).toarray()
    return train_post

def split(df, size):
    
    # Cleaning The Data
    df.posts, length = clear_text(df)
    
    #Splitting into train & test
    print("Splitting into train & test")
    train_data,test_data=train_test_split(df,test_size=size,random_state=0,stratify=df.type)
    
    #Applying Tfidf Vectorization
    print("Applying Tfidf Vectorization")
    vectorizer=TfidfVectorizer(max_features=5000,stop_words='english',tokenizer=Lemmatizer())
    vectorizer.fit(train_data.posts)
    
    #Applying the vectorizer transform
    train_post=vectorizer.transform(train_data.posts).toarray()
    test_post=vectorizer.transform(test_data.posts).toarray()
    
    #Label Encoding the classes as 0,1,2,3......
    print("Label Encoding the classes")
    target_encoder= LabelEncoder()
    
    #Getting the final train and test
    print("Getting the final train and test")
    train_target=target_encoder.fit_transform(train_data.type)
    test_target=target_encoder.fit_transform(test_data.type)
    # print(target_encoder.classes_)
    return train_post, test_post, train_target, test_target, vectorizer  

def remove_pattern(input_txt, pattern):
    r = re.findall(pattern, input_txt)
    for i in r:
        input_txt = re.sub(i, "", input_txt)
    return input_txt

model = load('./mbti/mbti_model.joblib')
df=pd.read_csv('./mbti/mbti_1.csv', index_col=False)
df_clean = df
df_clean.posts,df_clean_length=clear_text(df)
X_train2, X_test2, y_train2, y_test2, vectorizer = split(df_clean, 0.2)
df = pd.read_csv(
    "./mbti/training.1600000.processed.noemoticon.csv",
    encoding='latin-1'
)
df.columns = ["target", "ids", "date", "flag", "user", "text"]

def main(name="Dogbook"):
    # import os
    # os.chdir(os.path.dirname(os.path.abspath(__file__)))
    wordnet.synsets("hello")

    personality_types = [
        'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
        'ISTP', 'ISFP', 'INFP', 'INTP',
        'ESTP', 'ESFP', 'ENFP', 'ENTP',
        'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
    ]
    personality_types = [p.lower() for p in personality_types]

    target_encoder=LabelEncoder()
    target_encoder.fit(personality_types)

    le_name_mapping = dict(zip(target_encoder.classes_, target_encoder.fit_transform(target_encoder.classes_)))

    f = df[df.iloc[:, 4].isin(df.iloc[:, 4].value_counts().index[:200])]

    data = f.loc[:, ["user", "text"]]

    data["text"] = data["text"].str.replace(r"[@#][\w]*", "", regex=True)
    data["text"] = data["text"].str.replace(r"http[s]?://\S+", "", regex=True)

    collection = {}
    for user in data.user.unique():
        collection[user] = data[data.user == user].iloc[:, 1].tolist()

    input = collection[name]
    input, _ = clear_text_pred(input)
    input = vectorize(input, vectorizer)
    y_predict = model.predict(input)
    y_predict = convertToBinary(y_predict)
    y_predict = np.array(y_predict)
    count_1 = np.count_nonzero(y_predict, axis=0)
    count_0 = y_predict.shape[0] - count_1
    prob_1 = count_1/y_predict.shape[0]
    prob_0 = count_0/y_predict.shape[0]
    stacked = np.vstack((prob_0, prob_1))
    probability = []
    for i in range(2):
        for j in range(2):
            for k in range(2):
                for l in range(2):
                    probability.append([stacked[i][0]*stacked[j][1]*stacked[k][2]*stacked[l][3], [i, j, k, l]])
    probability.sort(reverse=True)
    out = [returnLabel(probability[0][1]), returnLabel(probability[1][1])]
    return out

if __name__ == '__main__':
    print(main())