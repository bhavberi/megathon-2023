import pickle
import math
import numpy as np

# change directory to app dir
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

data = pickle.load(open('./data/data.pkl', 'rb'))
id_to_skill = data['id_to_skill']
id_to_job = data['id_to_job']
skills = data['skills']

def get_skills_for_job(job_name):
    job_id = None
    for k, v in id_to_job.items():
        if v.lower() == job_name.lower():
            job_id = k
            break

    if job_id is None:
        return []

    # find skills for the job
    skills_for_job = skills[skills['occupation_id'] == job_id][
        'top_skills'].values.tolist()

    # convert to list of skill ids
    skills_for_job = [
        id_to_skill[int(float(skill_id))] for skill in skills_for_job for skill_id in skill.split(',')
    ]

    return skills_for_job


def find_jobs(skills_to_search, ids=False):
    if not ids:
        skill_ids = []
        skills_to_search = [
            skill.strip().lower() for skill in skills_to_search
        ]
        for k, v in id_to_skill.items():
            v = v.lower()
            # remove brackets
            v = v.replace('(', '').replace(')', '')
            skill_words = v.split(' ') # "machine", "learning" | "c","(prog","lang)"
            for skill_to_search in skills_to_search: # "machine learning" | "c"
                if skill_to_search in skill_words or skill_to_search == v:
                    skill_ids.append(k)

        skill_ids = list(set(skill_ids))
        print(len(skill_ids))
    else:
        skill_ids = skills_to_search

    # find job with the skill
    jobs_score = {}
    jobs_with_skill = []

    for skill_id in skill_ids:
        skill_id = str(float(skill_id))
        jobs_with_skill.extend(skills[skills['top_skills'].str.contains(
            skill_id)]['occupation_id'].values.tolist())

    for job_id in jobs_with_skill:
        if job_id not in id_to_job:
            continue
        job_name = id_to_job[job_id]
        if job_name not in jobs_score:
            jobs_score[job_name] = 0
        jobs_score[job_name] += 1

    # # normalize scores
    # jobs_score_sum = sum(jobs_score.values())
    # for job_name in jobs_score:
    #     jobs_score[job_name] /= jobs_score_sum

    # sort jobs by score
    jobs_score = sorted(jobs_score.items(), key=lambda x: x[1], reverse=True)

    # get top 10 jobs
    top_jobs = jobs_score[:10]

    # convert to dict
    n=10

    jobs_score_sum = sum([job[1] for job in top_jobs])
    jobs_score_sum1 = sum([math.exp(job[1]) for job in top_jobs])
    current_sum = jobs_score_sum

    # soft-max
    for j in range(n):
        current_sum -= top_jobs[j][1]
        score = max(math.exp(top_jobs[j][1])/jobs_score_sum1, top_jobs[j][1]/jobs_score_sum)
        top_jobs[j] = (top_jobs[j][0], score)

    assert np.min([job[1] for job in top_jobs]) >= 0
    assert np.max([job[1] for job in top_jobs]) <= 1

    top_jobs = dict(top_jobs)

    return top_jobs


if __name__ == '__main__':
    skills_to_search = ['machine learning']
    top_jobs = find_jobs(skills_to_search)
    from pprint import pprint
    pprint(top_jobs)
    # print(len(id_to_job))
    # print(get_skills_for_job('Software Engineer'))