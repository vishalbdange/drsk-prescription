import csv
import math
import matplotlib.pyplot as plt
from sklearn.metrics import r2_score
from sklearn.linear_model import LinearRegression 
from sklearn.model_selection import train_test_split
import pandas as pd
# from google.colab import drive
# drive.mount('/content/gdrive')

given_data = []
print(" Id : 191080008\n Name : Chahat Baghele\n Lab Experiment 1")
row_len = 0
print("--------Linear Regression Alogrithm--------")
print("Example File name : example.csv or F:/data/example.csv")
# file_name = input("Enter the file name : ")
print("\n The given data set in CSV file is \n")
with open("4.csv", 'r') as csvFile:
    reader = csv.reader(csvFile)
    for row in reader:
        row_len+=1
        given_data.append (row)
        # print(row)
        
header = given_data[0]
attribute = len(header)
col_len = attribute - 1

def predict(coeff,data):
    y_prect = 0
    for i in range(0,len(coeff)):
        y_prect = y_prect + (coeff[i]*data[i])
    return y_prect
# predict(coefficient,dummy_data[1])

def cost_fun(coefficient,data,y_actual):
    data_len = len(data)
    cost = 0
    for i in range(data_len):
        y_pred = predict(coefficient,data[i])
        diff = y_pred-y_actual[i]
        cost += diff*diff
    return cost/(2*data_len)
# cost_fun(coefficient,dummy_data,dummy_y)
    
def cal_diff(coefficient,data,y_actual):
    n = len(data)
    diff = []
    for i in range(n):
        y_pred = predict(coefficient,data[i])
        temp = y_pred-y_actual[i]
        diff.append(temp)
    return diff
# cal_diff(coefficient,dummy_data,dummy_y)

def sub_term(diff_array,data,index):
    term = 0
    total_x = len(diff_array)
    for i in range(total_x):
        term += diff_array[i]*data[i][index]
    return term
# sub_term(cal_diff(coefficient,dummy_data,dummy_y),dummy_data,0)

def gredient_descent(coefficient,data,y_actual,learning_rate=0.001):
    n = len(data)
    total_feature = len(coefficient)
    diff_array = cal_diff(coefficient,data,y_actual)
    for i in range(total_feature):
        temp = learning_rate*sub_term(diff_array,data,i)/n
        coefficient[i] = coefficient[i]-temp

# for i in range(100000):
    # gredient_descent(coefficient,dummy_data,dummy_y,0.0001)
#     print("Cost",i,":",cost_fun(coefficient,dummy_data,dummy_y))
# coefficient

class Linear_Regression:

    coefficient = []
    x_train = []
    y_train = []
    features = []
    predict_feature = ''
    def __init__(self):
        self.coefficient = []
        self.x_train = []
        self.y_train = []
        self.features = []
        self.predict_feature = ''

    def fit(self,data,y_index = -1,coefficient = False,alpha = 0.0001, epoch = 1000):
        self.predict_feature = data[0][y_index]
        self.features = data[0].copy()
        self.features.remove(self.predict_feature)
        self.features = ['constant'] + self.features
        for d in data[1:]:
            temp = d.copy()
            temp.remove(temp[y_index])
            self.x_train.append([1] + temp)
            self.y_train.append(d[y_index])
        self.coefficient = []
        if coefficient :
            self.coefficient = coefficient
        else :
            for i in self.features :
                self.coefficient.append(0)
        for i in range(epoch+1):
            gredient_descent(self.coefficient,self.x_train,self.y_train,alpha)
            if i%(epoch/10) == 0 :
                print("Mean Square Error at ", i ," iteration is",cost_fun(self.coefficient,self.x_train,self.y_train))
                
    def predict_one(self,X):
        return predict(self.coefficient, [1] + X)
    
    def predict_all(self,X):
        y_predict = []
        for i in X:
            y_predict.append(self.predict_one(i))
        return y_predict

    def accuracy(self,X,y_actual):
        n = len(y_actual)
        mean_y = sum(y_actual)/n
        y_predict = []
        for i in X:
            y_predict.append(self.predict_one(i))
        E1 = 0
        E2 = 0
        for i in range(n):
            temp_e1 = y_predict[i] - y_actual[i]
            temp_e2 = y_predict[i] - mean_y
            E1 += (temp_e1*temp_e1)
            E2 += (temp_e2*temp_e2)
        accuracy = 1 - E1/E2 
        print("R2 Score :",r2_score(y_actual,y_predict))
        # print("Accuracy is", accuracy*100)
        
    def printData(self,upto = 10):
        # print("coefficient length",len(self.coefficient))
        print("Coefficient :",self.coefficient)
        print("Feature Trained :",self.features)
        print("Feature Predict :",self.predict_feature)
        print("Accuracy on Training Data : ")
        self.accuracy(self.x_train,self.y_train)
        # for i in range(upto):
            # print(self.x_train[i],self.y_train[i])
            
# model = Linear_Regression()
# model.fit(dummy_data1,0,epoch = 100000)
# model.printData()

data = pd.read_csv("4.csv")
# data = pd.read_csv("kc_house_data.csv")
features = [feat for feat in data]
data = data.dropna()

# ,'sqft_living','sqft_lot','waterfront','view', 'condition', 'grade', 'sqft_basement','yr_built', 'yr_renovated','sqft_living','sqft_lot','waterfront','view', 'condition', 'grade', 'sqft_basement', 'zipcode', 'lat', 'long', 'sqft_above','sqft_living15', 'sqft_lot15'
data1 = data.drop(['id','date','yr_built', 'yr_renovated','zipcode', 'lat', 'long','sqft_above','waterfront','view','sqft_lot','sqft_living15','sqft_lot15'], axis = 1)
# data1.head(5)

train, test = train_test_split(data1,test_size = 0.2)
y_train_std = train['price']
x_train_std = train.drop(['price'],axis = 1)

y_test_std = test['price']
x_test_std = test.drop(['price'],axis = 1)

col = train.columns.tolist()
xtrain = [col] + train.values.tolist()

ytest = y_test_std.values.tolist()
xtest = x_test_std.values.tolist()

StandardModel = LinearRegression(normalize=True)
StandardModel.fit(x_train_std,y_train_std)

y_pred_std = StandardModel.predict(x_test_std)
# print(r2_score(y_test_std,y_pred_std))
StandardModel.score(x_test_std,y_test_std)

# Training our code model
my_model = Linear_Regression()
my_model.fit(xtrain,0,epoch = 10000,alpha = 0.0000001)
my_model.printData()

print("------- Coefficient got for our model ------- ")
for i in range(len(my_model.coefficient)):
  print(my_model.features[i],":",my_model.coefficient[i])

def predictAll(model,data):
    y_predict = []
    for i in data:
        y_predict.append(model.predict_one(i))
    return y_predict

print("Standard Lib Model Accuracy : ",end='')
print(StandardModel.score(x_test_std,y_test_std))

print("My model Accuracy : ",end='')
my_model.accuracy(xtest,ytest)
y_pred_mymodel = predictAll(my_model,xtest)

plt.scatter(test['sqft_living'],ytest,marker="+",color='g',label='Actual Price')
plt.scatter(test['sqft_living'],y_pred_std,marker="x",color='r',label='Std Lib Predicted Price')
plt.scatter(test['sqft_living'],y_pred_mymodel,marker=".",color='b',label='MY Code Predicted Price')
plt.xlabel('sqft_living')
plt.ylabel('Price')
plt.legend()
plt.title('Plot of Sqft_living v/s Price')
plt.show()

plt.scatter(test['sqft_basement'],ytest,marker="+",color='g',label='Actual Price')
plt.scatter(test['sqft_basement'],y_pred_std,marker="x",color='r',label='Std Lib Predicted Price')
plt.scatter(test['sqft_basement'],y_pred_mymodel,marker=".",color='b',label='MY Code Predicted Price')
plt.xlabel('sqft_basement')
plt.ylabel('Price')
plt.legend()
plt.title('Plot of Sqft_basement v/s Price')
plt.show()

for index in range(2587,2600):
  print("Feature Value  :",xtest[index])
  print("Actual Price   :",ytest[index])
  print("Std Lib Price  :",predict(StandardModel.coef_.tolist(),xtest[index]))
  print("My Model Price :",predict(my_model.coefficient,[1]+xtest[index]))
  print()
  