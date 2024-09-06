import numpy as np
import csv
import pandas as pd
from scipy.stats import pearsonr
import statsmodels.api as smapi
import pmdarima as pm
import matplotlib.pylab as plt
from matplotlib.pylab import rcParams
from sklearn.preprocessing import MinMaxScaler

import datetime
from statsmodels.tsa.arima.model import ARIMA
from math import sqrt
import math
from sklearn.metrics import mean_squared_error, mean_absolute_error

regions = ['NCR','01','02','03','4A','4B','05','06','07','08','09','10','11','CAR','CARAGA','BARMM']

rcParams['figure.figsize'] = 15, 6

regions_data = {
    "National Capital Region": {"cough": 0, "flu": 0, "fever": 0},
    "Region I - Ilocos Region": {"cough": 0, "flu": 0, "fever": 0},
    "Region II - Cagayan Valley": {"cough": 0, "flu": 0, "fever": 0},
    "Region III - Central Luzon": {"cough": 0, "flu": 0, "fever": 0},
    "Region IV-A - CALABARZON": {"cough": 0, "flu": 0, "fever": 0},
    "Region IV-B - MIMAROPA": {"cough": 0, "flu": 0, "fever": 0},
    "Region V - Bicol Region": {"cough": 0, "flu": 0, "fever": 0},
    "Region VI - Western Visayas": {"cough": 0, "flu": 0, "fever": 0},
    "Region VII - Central Visayas": {"cough": 0, "flu": 0, "fever": 0},
    "Region VIII - Eastern Visayas": {"cough": 0, "flu": 0, "fever": 0},
    "Region IX - Zamboanga Peninsula": {"cough": 0, "flu": 0, "fever": 0},
    "Region X - Northern Mindanao": {"cough": 0, "flu": 0, "fever": 0},
    "Region XI - Davao Region": {"cough": 0, "flu": 0, "fever": 0},
    "Region XII - SOCCSKSARGEN": {"cough": 0, "flu": 0, "fever": 0},
    "Region XIII - Caraga": {"cough": 0, "flu": 0, "fever": 0},
    "CAR - Cordillera Administrative Region": {"cough": 0, "flu": 0, "fever": 0},
    "BARMM - Bangsamoro Autonomous Region in Muslim Mindanao": {"cough": 0, "flu": 0, "fever": 0}
}

# Example of accessing and updating values for a specific region
regions_data["National Capital Region"]["cough"] = 10
regions_data["National Capital Region"]["flu"] = 5
regions_data["National Capital Region"]["fever"] = 2

print(regions_data["National Capital Region"])  # Output: {'cough': 10, 'flu': 5, 'fever': 2}

from datetime import datetime, timedelta
import csv

def generate_date_list(start_date, end_date):
    # Convert string dates to datetime objects
    start_date = datetime.strptime(start_date, "%Y-%m-%d")
    end_date = datetime.strptime(end_date, "%Y-%m-%d")
    
    # Generate list of dates
    date_list = []
    current_date = start_date
    while current_date <= end_date:
        date_list.append(current_date.strftime("%Y-%m-%d"))
        current_date += timedelta(days=1)
    
    return date_list

# Example usage
start_date = "2020-02-01"
end_date = "2020-03-30"
date_list = generate_date_list(start_date, end_date)

# Write date_list to a CSV file
with open('dates.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(date_list)


for region in regions:
  start_date = "2020-02-01"
  end_date = "2020-03-30"
  data = pd.read_csv('./regional/' + region + '.csv', header=0).fillna(0)
  start_date = data[data["Report_Date"] == start_date].index[0]
  end_date = data[data["Report_Date"] == end_date].index[0]
  # dateparse = lambda dates: pd.to_datetime.strptime(dates, '%Y-%m-%d')
  dateparse = lambda dates: pd.to_datetime(dates, format='%Y-%m-%d')
  # data = pd.read_csv('/content/drive/MyDrive/thesis/regional/NCR.csv', sep=',', parse_dates=['Report_Date'], index_col='Report_Date',date_parser=dateparse)

  data = pd.read_csv('./regional/' +region + '.csv',
                    sep=',',
                    parse_dates=['Report_Date'],
                    index_col='Report_Date',
                    date_parser=dateparse).iloc[start_date:end_date+1]


  train_data, test_data = data[0:int(len(data)*0.30)], data[int(len(data)*0.30):]

  if region == "NCR":
    exog = pd.read_csv('./GT/Feb-March30_2020_MetroManila.csv', skiprows=[0, 1])
  elif region == "01":
    exog = pd.read_csv('./GT/Feb-March30_2020_Ilocos.csv', skiprows=[0, 1])
  elif region == "02":
    exog = pd.read_csv('./GT/Feb-March30_2020_CagayanValley.csv', skiprows=[0, 1])
  elif region == "03":
    exog = pd.read_csv('./GT/Feb-March30_2020_CentralLuzon.csv', skiprows=[0, 1])
  elif region == "4A":
    exog = pd.read_csv('./GT/Feb-March30_2020_Calabarzon.csv', skiprows=[0, 1])
  elif region == "4B":
    exog = pd.read_csv('./GT/Feb-March30_2020_Mimaropa.csv', skiprows=[0, 1])
  elif region == "05":
    exog = pd.read_csv('./GT/Feb-March30_2020_Bicol.csv', skiprows=[0, 1])
  elif region == "06":
    exog = pd.read_csv('./GT/Feb-March30_2020_WesternVisayas.csv', skiprows=[0, 1])
  elif region == "07":
    exog = pd.read_csv('./GT/Feb-March30_2020_CentralVisayas.csv', skiprows=[0, 1])
  elif region == "08":
    exog = pd.read_csv('./GT/Feb-March30_2020_EasternVisayas.csv', skiprows=[0, 1])
  elif region == "09":
    exog = pd.read_csv('./GT/Feb-March30_2020_Zamboanga.csv', skiprows=[0, 1])
  elif region == "10":
    exog = pd.read_csv('./GT/Feb-March30_2020_NorthernMindanao.csv', skiprows=[0, 1])
  elif region == "11":
    exog = pd.read_csv('./GT/Feb-March30_2020_Davao.csv', skiprows=[0, 1])
  elif region == "CAR":
    exog = pd.read_csv('./GT/Feb-March30_2020_CAR.csv', skiprows=[0, 1])
  elif region == "CARAGA":
    exog = pd.read_csv('./GT/Feb-March30_2020_Caraga.csv', skiprows=[0, 1])
  elif region == "BARMM":
    exog = pd.read_csv('./GT/Feb-March30_2020_MetroManila.csv', skiprows=[0, 1])

  total_cases = [x for x in data['Total_Cases']]

  # Rename columns
  new_columns = ['Day', 'cough', 'fever', 'covid symptoms','flu','swab test']
  # new_columns = ['Day', 'cough', 'fever', 'covid symptoms']
  exog.columns = new_columns

  exog1 = pd.DataFrame(exog)['cough']
  exog2 = pd.DataFrame(exog)['fever']
  exog3 = pd.DataFrame(exog)['covid symptoms'].replace('<1',0)
  exog4 = pd.DataFrame(exog)['flu']
  exog5 = pd.DataFrame(exog)['swab test']

  regressor = []

  def checkCorr(a,b,c,d,e):
    a = [int(x) for x in a]
    b = [int(x) for x in b]
    c = [int(x) for x in c]
    d = [int(x) for x in d]
    e = [int(x) for x in e]


    correlation_coefficientA, p_valueA = pearsonr(a, total_cases)
    correlation_coefficientB, p_valueB = pearsonr(b, total_cases)
    correlation_coefficientC, p_valueC = pearsonr(c, total_cases)
    correlation_coefficientD, p_valueD = pearsonr(d, total_cases)
    correlation_coefficientE, p_valueE = pearsonr(e, total_cases)

    print("cough: ", correlation_coefficientA)
    print("fever: ", correlation_coefficientB)
    print("covid symptoms: ", correlation_coefficientC)
    print("flu: ", correlation_coefficientD)
    print("swab test: ", correlation_coefficientE)

    cough = sum(a) / len(a)
    fever = sum(b) / len(b)
    flu = sum(d) / len(d)

    return cough, fever, flu


  def createRegressor(a,b,c,d,e):
    for x in range(len(a)):
      # regressor.append(( int(c[x]) + int(e[x]))/2)
      regressor.append((int(a[x]) + int(b[x]) +  int(c[x]) + int(d[x]) + int(e[x]))/5)

  createRegressor(exog1,exog2,exog3,exog4,exog5)
  exog_train, exog_test= [x for x in exog1][0:int(len(data)*0.30)],[x for x in exog1][int(len(data)*0.30):]


  symptomsRSV = checkCorr(exog1,exog2,exog3,exog4,exog5)

  if region == "NCR":
    regions_data["National Capital Region"]["cough"] = symptomsRSV[0]
    regions_data["National Capital Region"]["fever"] = symptomsRSV[1]
    regions_data["National Capital Region"]["flu"] = symptomsRSV[2]
  elif region == "01":
      regions_data["Region I - Ilocos Region"]["cough"] = symptomsRSV[0]
      regions_data["Region I - Ilocos Region"]["fever"] = symptomsRSV[1]
      regions_data["Region I - Ilocos Region"]["flu"] = symptomsRSV[2]
  elif region == "02":
      regions_data["Region II - Cagayan Valley"]["cough"] = symptomsRSV[0]
      regions_data["Region II - Cagayan Valley"]["fever"] = symptomsRSV[1]
      regions_data["Region II - Cagayan Valley"]["flu"] = symptomsRSV[2]
  elif region == "03":
      regions_data["Region III - Central Luzon"]["cough"] = symptomsRSV[0]
      regions_data["Region III - Central Luzon"]["fever"] = symptomsRSV[1]
      regions_data["Region III - Central Luzon"]["flu"] = symptomsRSV[2]
  elif region == "4A":
      regions_data["Region IV-A - CALABARZON"]["cough"] = symptomsRSV[0]
      regions_data["Region IV-A - CALABARZON"]["fever"] = symptomsRSV[1]
      regions_data["Region IV-A - CALABARZON"]["flu"] = symptomsRSV[2]
  elif region == "4B":
      regions_data["Region IV-B - MIMAROPA"]["cough"] = symptomsRSV[0]
      regions_data["Region IV-B - MIMAROPA"]["fever"] = symptomsRSV[1]
      regions_data["Region IV-B - MIMAROPA"]["flu"] = symptomsRSV[2]
  elif region == "05":
      regions_data["Region V - Bicol Region"]["cough"] = symptomsRSV[0]
      regions_data["Region V - Bicol Region"]["fever"] = symptomsRSV[1]
      regions_data["Region V - Bicol Region"]["flu"] = symptomsRSV[2]
  elif region == "06":
      regions_data["Region VI - Western Visayas"]["cough"] = symptomsRSV[0]
      regions_data["Region VI - Western Visayas"]["fever"] = symptomsRSV[1]
      regions_data["Region VI - Western Visayas"]["flu"] = symptomsRSV[2]
  elif region == "07":
      regions_data["Region VII - Central Visayas"]["cough"] = symptomsRSV[0]
      regions_data["Region VII - Central Visayas"]["fever"] = symptomsRSV[1]
      regions_data["Region VII - Central Visayas"]["flu"] = symptomsRSV[2]
  elif region == "08":
      regions_data["Region VIII - Eastern Visayas"]["cough"] = symptomsRSV[0]
      regions_data["Region VIII - Eastern Visayas"]["fever"] = symptomsRSV[1]
      regions_data["Region VIII - Eastern Visayas"]["flu"] = symptomsRSV[2]
  elif region == "09":
      regions_data["Region IX - Zamboanga Peninsula"]["cough"] = symptomsRSV[0]
      regions_data["Region IX - Zamboanga Peninsula"]["fever"] = symptomsRSV[1]
      regions_data["Region IX - Zamboanga Peninsula"]["flu"] = symptomsRSV[2]
  elif region == "10":
      regions_data["Region X - Northern Mindanao"]["cough"] = symptomsRSV[0]
      regions_data["Region X - Northern Mindanao"]["fever"] = symptomsRSV[1]
      regions_data["Region X - Northern Mindanao"]["flu"] = symptomsRSV[2]
  elif region == "11":
      regions_data["Region XI - Davao Region"]["cough"] = symptomsRSV[0]
      regions_data["Region XI - Davao Region"]["fever"] = symptomsRSV[1]
      regions_data["Region XI - Davao Region"]["flu"] = symptomsRSV[2]
  elif region == "CAR":
      regions_data["CAR - Cordillera Administrative Region"]["cough"] = symptomsRSV[0]
      regions_data["CAR - Cordillera Administrative Region"]["fever"] = symptomsRSV[1]
      regions_data["CAR - Cordillera Administrative Region"]["flu"] = symptomsRSV[2]
  elif region == "CARAGA":
      regions_data["Region XIII - Caraga"]["cough"] = symptomsRSV[0]
      regions_data["Region XIII - Caraga"]["fever"] = symptomsRSV[1]
      regions_data["Region XIII - Caraga"]["flu"] = symptomsRSV[2]
  elif region == "BARMM":
      regions_data["BARMM - Bangsamoro Autonomous Region in Muslim Mindanao"]["cough"] = symptomsRSV[0]
      regions_data["BARMM - Bangsamoro Autonomous Region in Muslim Mindanao"]["fever"] = symptomsRSV[1]
      regions_data["BARMM - Bangsamoro Autonomous Region in Muslim Mindanao"]["flu"] = symptomsRSV[2]



  time_series = data['Total_Cases']

  # Fit the Auto ARIMA model
  try:
    model = pm.auto_arima(time_series,
                          exogenous=exog,
                          start_p=1, start_q=1,
                          test='adf',       # use adftest to find optimal 'd'
                          max_p=5, max_q=5, # maximum p and q
                          m=1,              # frequency of series
                          d=None,           # let model determine 'd'
                          seasonal=False,   # No seasonality
                          start_P=0,
                          D=0,
                          trace=True,
                          error_action='ignore',
                          suppress_warnings=True,
                          stepwise=True)
    best_params = model.get_params()['order']
  except:
    best_params = (0,0,0)


  # Print the summary of the model
  # print(model.summary())

  
  # print("BEST : ", best_params['order'])
  train_arima = train_data['Total_Cases']
  test_arima = test_data['Total_Cases']

  history = [x for x in train_arima]
  exog_data = [x for x in exog_train]
  y = test_arima

  predictions = [x for x in train_arima]
  for i in range(1, len(y)+1):
      # predict
      model = smapi.tsa.arima.ARIMA(endog=history,exog=exog_data, order=best_params)
      model_fit = model.fit()
      # yhat = model_fit.forecast()[0]
      yhat = model_fit.forecast(steps=1, exog=exog_test[i-1])[0]
      predictions.append(yhat)
      # invert transformed prediction
      # observation
      obs = y[i-1]
      history.append(obs)
      exog_data.append(exog_test[i-1])

  regionCodes = {
  '01': 'Ilocos Region (Region I)',
  '02': 'Cagayan Valley (Region II)',
  '03': 'Central Luzon (Region III)',
  'NCR': 'Metropolitan Manila',
  '4A': 'CALABARZON (Region IV-A)',
  '4B': 'MIMAROPA (Region IV-B)',
  '05': 'Bicol Region (Region V)',
  '06': 'Western Visayas (Region VI)',
  '07': 'Central Visayas (Region VII)',
  '08': 'Eastern Visayas (Region VIII)',
  '09': 'Zamboanga Peninsula (Region IX)',
  '10': 'Northern Mindanao (Region X)',
  '11': 'Davao Region (Region XI)',
  'CARAGA': 'Caraga (Region XIII)',
  '12': 'SOCCSKSARGEN (Region XII)',
  'CAR': 'Cordillera Administrative Region (CAR)',
  'BARMM': 'Autonomous Region of Muslim Mindanao (ARMM)'
  }


  pd.DataFrame(predictions).to_csv(regionCodes[region] + '.csv', index=False)
  # report performance
  # print(len(y),len(predictions))
  # mse = mean_squared_error(y, predictions)
  # print('MSE: '+str(mse))
  # mae = mean_absolute_error(y, predictions)
  # print('MAE: '+str(mae))
  # rmse = math.sqrt(mean_squared_error(y, predictions))
  # print('RMSE: '+str(rmse))
  # correlation_coefficient, p_value = pearsonr(y, predictions)
  # print(f"Correlation coefficient: {correlation_coefficient}")
  # print(f"P-value: {p_value}")
  # model = smapi.tsa.arima.ARIMA(endog=history,exog=exog_data, order=best_params)
  # model_fit = model.fit()
  # print(model_fit.aic)
  # plt.figure(figsize=(16,8))
  # plt.plot(data.index[-100:], data['Total_Cases'].tail(100), color='green', label = 'Train COVID-19 Case')
  # plt.plot(test_data.index, y, color = 'red', label = 'Real COVID-19 Cases')
  # plt.plot(test_data.index, predictions, color = 'blue', label = 'Predicted COVID-19 Cases')
  # plt.title('NCR COVID-19 Cases Prediction')
  # plt.xlabel('Time')
  # plt.ylabel('COVID-19 Cases')
  # plt.legend()
  # plt.grid(True)
  # plt.savefig('../static/graphs/arimax.png')
  # plt.show()

# Define the path for the CSV file
csv_file = 'regions_data.csv'

# Define the field names for the CSV headers
field_names = ['Region', 'cough', 'flu', 'fever']

# Open the CSV file in write mode and write the headers
with open(csv_file, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=field_names)
    writer.writeheader()

    # Write each region's data to the CSV file
    for region, data in regions_data.items():
        writer.writerow({
            'Region': region,
            'cough': data['cough'],
            'flu': data['flu'],
            'fever': data['fever']
        })

print(f'CSV file "{csv_file}" has been created successfully.')