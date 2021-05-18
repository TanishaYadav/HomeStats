from flask import Flask, request, jsonify, render_template,redirect
import util
import json
import util_2

app = Flask(__name__)

@app.route('/home')
@app.route('/',methods=['GET', 'POST'])
def home():
    estimated_price = 0
    location_list = get_location_names()
    if request.method == 'POST':
        sqft = float(request.form['total_sqft'])
        location = request.form['location']
        bhk = int(request.form['uiBHK'])
        bath = int(request.form['uiBathrooms'])
        # balcony = int(request.form['balcony'])
        # price_per_sqft = float(request.form['price_per_sqft'])
        estimated_price = util_2.get_estimated_price(location,sqft,bhk,bath)

        return render_template('emi_result.html', priceRs= 'Rs. '+str(estimated_price) + ' Lakhs', servers=location_list,price =estimated_price*100000  )
    else:
        return render_template('index.html',servers=location_list)
# @app.route('/',methods = ['GET','POST'])
# def show_price():
#     if request.method == 'POST':
#         return render_template('index.html')
#     else:
#         return render_template('index.html')
#

@app.route('/get_location_names')
def get_location_names():
    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[5:]
    return __locations

@app.route('/home-loan')
def home_loan():
    return render_template('home_loan.html')


@app.route('/legal-and-tax')
def legal_and_tax():
    return render_template('legal_and_tax.html')

@app.route('/home-loan-home-loan-process')
def home_loan_process():
    return render_template('home-loan-process.html')

@app.route('/home-loan-choosing-provider')
def home_loan_choosing_provider():
    return render_template('choosing-provider.html')

@app.route('/home-loan-rate-of-interest')
def home_loan_rate_of_interest():
    return render_template('rate-of-interest.html')

@app.route('/home-loan-loan-insurance')
def home_loan_loan_insurance():
    return render_template('loan-insurance.html')

@app.route('/home-loan-loan-eligibility')
def home_loan_loan_eligibility():
    return render_template('loan-eligibility.html')


@app.route('/calculators')
def calculators():
    return render_template('calculators.html')

@app.route('/legal-and-tax-property-registration')
def legal_and_tax_property_registration():
    return render_template('propert-registration.html')

@app.route('/legal-and-tax-taxes-involved')
def legal_and_tax_taxes_involved():
    return render_template('taxes-involved.html')

@app.route('/legal-and-tax-gst')
def legal_and_tax_gst():
    return render_template('gst.html')

@app.route('/legal-and-tax-tax-benefits')
def legal_and_tax_tax_benefits():
    return render_template('tax-benefits.html')

@app.route('/legal-and-tax-certificates')
def legal_and_tax_certificates():
    return render_template('certificates.html')

@app.route('/calculators-emi-loan-transfer')
def calculators_emi_loan_transfer():
    return render_template('emi-loan-transfer.html')

@app.route('/calculators-emi-calculator')
def calculators_emi_calculator():
    return render_template('emi.html')

@app.route('/calculators-monthly-repayment')
def calculators_monthly_repayment():
    return render_template('monthly-repayment.html')























if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
#         return render_template('index.html', price= 'Rs. '+str(estimated_price), servers=location_list)
#     else:
#         pass


















# @app.route('/predict_home_price', methods=['GET', 'POST'])
# def predict_home_price():
#     estimated_price = 0
#     if request.method == 'POST':
#         total_sqft = float(request.form['total_sqft'])
#         print(total_sqft)
#         location = request.form['location']
#         bhk = int(request.form['uiBHK'])
#         bath = int(request.form['uiBathrooms'])
#         balcony = int(request.form['balcony'])
#         price_per_sqft = float(request.form['price_per_sqft'])
#         estimated_price = util.get_estimated_price(total_sqft, bath, balcony, bhk, price_per_sqft,location)
#         location_list = get_location_names()



app.run(debug=True)
