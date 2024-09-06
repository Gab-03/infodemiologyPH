import requests

files = """Feb-March30_2020_ARMM.csv
Feb-March30_2020_Bicol.csv
Feb-March30_2020_CAR.csv
Feb-March30_2020_CagayanValley.csv
Feb-March30_2020_Calabarzon.csv
Feb-March30_2020_Caraga.csv
Feb-March30_2020_CentralLuzon.csv
Feb-March30_2020_CentralVisayas.csv
Feb-March30_2020_Davao.csv
Feb-March30_2020_EasternVisayas.csv
Feb-March30_2020_Ilocos.csv
Feb-March30_2020_MetroManila.csv
Feb-March30_2020_Mimaropa.csv
Feb-March30_2020_NorthernMindanao.csv
Feb-March30_2020_RegionXII.csv
Feb-March30_2020_WesternVisayas.csv
Feb-March30_2020_Zamboanga.csv""".split('\n')

base_url = "https://raw.githubusercontent.com/Gab-03/GT/main/"

for f in files:
    url = base_url + f
    print(f"Trying to download from: {url}")
    response = requests.get(url)
    if response.status_code == 200:
        with open(f, 'wb') as file:
            file.write(response.content)
        print(f"Downloaded {f}")
    else:
        print(f"Failed to download {f}, status code: {response.status_code}")
