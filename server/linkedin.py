from linkedin_skills import *
from find_jobs import *

def get_jobs_from_skills(profile_link):
	email, password = load_creds()
	# # load profile links
	# profiles = open("profiles.txt", "r").read().split("\n")

	profiles=[profile_link]
	init()
	login(email, password)

	for profile in profiles:
		skills = get_skills(profile)
		title = get_title()
		# print(profile, skills)
		top_jobs = find_jobs(skills)
		print(title)
		from pprint import pprint
		pprint(top_jobs)

	close_driver()
	return top_jobs

if __name__ == '__main__':
	# profile_link = input("Enter your linkedin profile link: ")
	import argparse
	parser = argparse.ArgumentParser()
	parser.add_argument("--profile_link", help="linkedin profile link")
	args = parser.parse_args()
	get_jobs_from_skills(args.profile_link)