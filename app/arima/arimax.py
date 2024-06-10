import numpy as np
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


rcParams['figure.figsize'] = 15, 6

data = pd.read_csv('./regional/NCR.csv', header=0).fillna(0)
start_date = "2020-02-01"
end_date = "2020-03-30"
start_date = data[data["Report_Date"] == start_date].index[0]
end_date = data[data["Report_Date"] == end_date].index[0]
# dateparse = lambda dates: pd.to_datetime.strptime(dates, '%Y-%m-%d')
dateparse = lambda dates: pd.to_datetime(dates, format='%Y-%m-%d')
# data = pd.read_csv('/content/drive/MyDrive/thesis/regional/NCR.csv', sep=',', parse_dates=['Report_Date'], index_col='Report_Date',date_parser=dateparse)
data = pd.read_csv('./regional/NCR.csv',
                   sep=',',
                   parse_dates=['Report_Date'],
                   index_col='Report_Date',
                   date_parser=dateparse).iloc[start_date:end_date+1]


train_data, test_data = data[0:int(len(data)*0.30)], data[int(len(data)*0.30):]

exog = pd.read_csv('./GT/NCR/Feb1_March30_k5-2020 (1).csv', skiprows=[0, 1])
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

def createRegressor(a,b,c,d,e):
  for x in range(len(a)):
    # regressor.append(( int(c[x]) + int(e[x]))/2)
    regressor.append((int(a[x]) + int(b[x]) +  int(c[x]) + int(d[x]) + int(e[x]))/5)

createRegressor(exog1,exog2,exog3,exog4,exog5)
exog_train, exog_test= [x for x in exog1][0:int(len(data)*0.30)],[x for x in exog1][int(len(data)*0.30):]
checkCorr(exog1,exog2,exog3,exog4,exog5)

time_series = data['Total_Cases']

# Fit the Auto ARIMA model
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

# Print the summary of the model
print(model.summary())

best_params = (3,2,0)
train_arima = train_data['Total_Cases']
test_arima = test_data['Total_Cases']

history = [x for x in train_arima]
exog_data = [x for x in exog_train]
y = test_arima


predictions = list()
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
# report performance
print(len(y),len(predictions))
mse = mean_squared_error(y, predictions)
print('MSE: '+str(mse))
mae = mean_absolute_error(y, predictions)
print('MAE: '+str(mae))
rmse = math.sqrt(mean_squared_error(y, predictions))
print('RMSE: '+str(rmse))
correlation_coefficient, p_value = pearsonr(y, predictions)
print(f"Correlation coefficient: {correlation_coefficient}")
print(f"P-value: {p_value}")
model = smapi.tsa.arima.ARIMA(endog=history,exog=exog_data, order=best_params)
model_fit = model.fit()
print(model_fit.aic)
plt.figure(figsize=(16,8))
plt.plot(data.index[-100:], data['Total_Cases'].tail(100), color='green', label = 'Train COVID-19 Case')
plt.plot(test_data.index, y, color = 'red', label = 'Real COVID-19 Cases')
plt.plot(test_data.index, predictions, color = 'blue', label = 'Predicted COVID-19 Cases')
plt.title('NCR COVID-19 Cases Prediction')
plt.xlabel('Time')
plt.ylabel('COVID-19 Cases')
plt.legend()
plt.grid(True)
plt.savefig('../static/graphs/arimax.png')
