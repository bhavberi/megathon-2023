from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--window-size=1920,1080')
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=chrome_options)

logged_in = False

def close_driver():
    driver.close()

def login(email, password):
    driver.get("https://www.linkedin.com/")

    # wait for page to load
    WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(("id", "session_key")))
        
    # enter email and password
    email_input = driver.find_element(by="id", value="session_key")
    password_input = driver.find_element(by="id", value="session_password")

    email_input.send_keys(email)
    password_input.send_keys(password)

    # locate login button using text "Sign in"
    for button in driver.find_elements(by="tag name", value="button"):
        if button.text == "Sign in":
            login_button = button
            break
    login_button.click()

    global logged_in
    logged_in = True


def get_title():
    if not logged_in:
        raise Exception("Not logged in. Run login() first.")

    title = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            ("class name", "artdeco-entity-lockup__title")))
    return title.text


def get_skills(profile_link):
    if not logged_in:
        raise Exception("Not logged in. Run login() first.")

    driver.get(profile_link + "/details/skills/")

    # # wait for page to load
    # WebDriverWait(driver, 10).until(EC.presence_of_element_located(("class name", "scaffold-finite-scroll__load-button")))

    # # scroll to bottom
    # driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    try:
        # wait till the whole page is loaded
        # WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located(
        #         ("class name", "scaffold-finite-scroll__load-button")))

        # implicitly wait for 10 seconds
        driver.implicitly_wait(10)

        # get elements with data-field="skill_page_skill_topic"
        skills = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located(
                ("css selector", "[data-field='skill_page_skill_topic']")))
    except:
        print("No skills found for", profile_link)
        return []

    # create skills set
    skill_set = []
    for skill in skills:
        skill_set.append(skill.text.split("\n")[0].strip())

    # remove empty strings
    skill_set = [skill for skill in skill_set if skill != '']
    return skill_set


def load_creds():
    # import json
    # # get creds from creds.json
    # creds = json.load(open('creds.json', 'r'))
    # email = creds['email']
    # password = creds['password']
    from os import getenv
    email = getenv("LINKEDIN_EMAIL")
    password = getenv("LINKEDIN_PASSWORD")
    return email, password

def init():
    # hide the browser window
    driver.set_window_position(-10000, 0)
    email, password = load_creds()
    login(email, password)

def main():
    init()
    # load profile links
    profiles = open("profiles.txt", "r").read().split("\n")

    for profile in profiles:
        skills = get_skills(profile)
        print(profile, skills)


if __name__ == '__main__':
    main()
