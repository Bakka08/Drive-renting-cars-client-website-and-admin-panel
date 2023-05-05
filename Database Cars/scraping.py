import json

from selenium import webdriver
from selenium.webdriver.common.by import By
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
website = 'https://www.discovercars.com/fr/search/b8550f2d-18a4-4825-980f-1c1d4bfe7b54'
path = 'Users/Yagami/Downloads/Chromedriver'
driver = webdriver.Chrome(options=options,executable_path=path)
driver.get(website)
all_matches_button = driver.find_element(By.XPATH, "//a[@class='button button-block show-more-cars trigger-gtm-sr']")
all_matches_button.click()
all_matches_button.click()
all_matches_button.click()
try:
    cars=driver.find_elements(By.XPATH,"//div[@class='car-box']")
except:
    cars = driver.find_elements(By.XPATH, "//div[@class='car-box no-show']")
data = []
data2 = []
for car in cars:
    try:
        image=car.find_element(By.XPATH,".// img[@class='lazy-load loaded']").get_attribute('data-src')
    except:
        image=car.find_element(By.XPATH,".// img[@class='lazy-load']").get_attribute('data-src')
    items={
        'nom': car.find_element(By.XPATH,".//div [@class='car-name text-24 text-bold']").text,
        'nbr_places': car.find_element(By.XPATH,".//ul [@class='dc-list dc-list-icon dc-list-md text-14 dc-list-horizontal dc-list-mt-8 car-params mt-8 text-gray-500']/li[1]").text,
        'nbr_bagage': car.find_element(By.XPATH,".//ul [@class='dc-list dc-list-icon dc-list-md text-14 dc-list-horizontal dc-list-mt-8 car-params mt-8 text-gray-500']/li[2]").text,
        'nbr_portes': car.find_element(By.XPATH,".//ul [@class='dc-list dc-list-icon dc-list-md text-14 dc-list-horizontal dc-list-mt-8 car-params mt-8 text-gray-500']/li[3]").text,
        'climatise ou pas': car.find_element(By.XPATH,".//ul [@class='dc-list dc-list-icon dc-list-md text-14 dc-list-horizontal dc-list-mt-8 car-params mt-8 text-gray-500']/li[4]").text,
        'manuelle ou pas': car.find_element(By.XPATH,".//ul [@class='dc-list dc-list-icon dc-list-md text-14 dc-list-horizontal dc-list-mt-8 car-params mt-8 text-gray-500']/li[5]").text,
        'prix': car.find_element(By.XPATH,".//div [@class='price-item-price-main']").text,
        'image': image
    }
    print(items)
    data.append(items)
    with open('data.json','w') as f:
        json.dump(data,f)
