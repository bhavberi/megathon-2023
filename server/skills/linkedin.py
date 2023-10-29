import linkedin_skills
import find_jobs

def get_jobs_from_skills(profile_link):
	email, password = linkedin_skills.load_creds()
	# # load profile links
	# profiles = open("profiles.txt", "r").read().split("\n")

	profiles=[profile_link]
	linkedin_skills.init()
	linkedin_skills.login(email, password)

	for profile in profiles:
		skills = linkedin_skills.get_skills(profile)
		title = linkedin_skills.get_title()
		# print(profile, skills)
		top_jobs = find_jobs.find_jobs(skills)
		print(title)
		from pprint import pprint
		pprint(top_jobs)

	linkedin_skills.close_driver()
	return top_jobs

if __name__ == '__main__':
	profile_link = input("Enter your linkedin profile link: ")
	get_jobs_from_skills(profile_link)