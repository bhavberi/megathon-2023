from os import getenv
from dotenv import load_dotenv
load_dotenv()
from pymongo import MongoClient

# get mongodb URI and database name from environment variale
MONGO_URI = "mongodb+srv://bhavberi:bhavberi@newcluster.wobr631.mongodb.net/"
MONGO_DATABASE = getenv("MONGO_DATABASE", default="dev")

# instantiate mongo client
client = MongoClient(MONGO_URI)

# get database
db = client[MONGO_DATABASE]