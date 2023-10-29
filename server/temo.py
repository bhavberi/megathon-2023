# %%
import replicate
import os

# %%
os.environ["REPLICATE_API_TOKEN"] = "r8_1dCZ6iRppRmoW71i041hg6gLKEeIQ3j0F8Tkh"

# %%
# export REPLICATE_API_TOKEN=r8_1uRU0jH51c31ZmOoWkZ6exCIS7tFxrO4TI4VL

# %%
personality = "ENTP"

# %%
promt_mbit = (
    "Give pros and cons for a job applicant with the personality type "
    + personality
    + ". Dont refer to yourself or the promter. Also dont give an introduction or greeting."
)

promt_5 = "Give a report for a job applicant with the big 5 scores of 0.8, 0.2, 0.4, 0.9, 0.8 where max is 1. Make it specifically in regards of their hirability Dont refer to yourself or the promter. Also dont give an introduction or greeting."

# %%
system_promt = "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. Also, try to give responses which are impersonal, meaning try not to refer to yourself or the asker.If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information."

# %%
output = replicate.run(
    "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    input={"prompt": promt_5, "max_new_tokens": 500, "system_promt": system_promt},
)
# The meta/llama-2-70b-chat model can stream output as it's running.
# The predict method returns an iterator, and you can iterate over that output.
result = []
for item in output:
    # https://replicate.com/meta/llama-2-70b-chat/versions/02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3/api#output-schema
    result.append(item)

# %%
# convert list to string
result = "".join(result)
# print(result)

# %%
def llama_call(test, *args):
    if test == "mbit":
        promt = (
            "Give pros and cons for a job applicant with the personality type "
            + args[0]
            + ". Dont refer to yourself or the promter. Also dont give an introduction or greeting."
        )
    else:
        promt = (
            "Give a report for a job applicant with the big 5 scores of"
            + str(args[0][0])
            + ", "
            + str(args[0][1])
            + ", "
            + str(args[0][2])
            + ", "
            + str(args[0][3])
            + ", "
            + str(args[0][4])
            + ", "
            + " where max is 40. Make it specifically in regards of their hirability Dont refer to yourself or the promter. Also dont give an introduction or greeting."
        )
    system_promt = "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. Also, try to give responses which are impersonal, meaning try not to refer to yourself or the asker.If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information."
    output = replicate.run(
        "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
        input={
            "prompt": promt,
            "max_new_tokens": 500,
            "system_promt": system_promt,
        },
    )
    # The meta/llama-2-70b-chat model can stream output as it's running.
    # The predict method returns an iterator, and you can iterate over that output.

    result = []
    for item in output:
        # https://replicate.com/meta/llama-2-70b-chat/versions/02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3/api#output-schema
        result.append(item)
    result = "".join(result)
    return result


