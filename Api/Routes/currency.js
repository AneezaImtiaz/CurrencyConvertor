const express =  require('express') // frammework for Node-JS
const router = express.Router() // handling routes
const  getRequest = require('../../Services/services.js')
const  urlPaths = require('../../Helpers/AppConfiguration.js')
const key = '4ab3f01eebcb6721a9d7d75c52514973' // access key for fixer API

router.get('/getRate/:currency', async  (req, res, next) =>  {
	try {
		let currency = (req.params.currency).toUpperCase()
        let url = urlPaths.currencyRate + '?access_key=' + key
		let [data, statusText] = await getRequest(url)

		let rates = data.rates;
	 let currencyRate = null;
	 
	 // loop over values
	 for (let key in rates) {
		let value = rates[key];
		if(key === currency){
			currencyRate = { currency: key, value: value}
		} 
	}
	let msg = currencyRate === null ? 'No record found.' : 'You have successfully get the latest rate of '+currency
	
	res.status(200).json({
		status: 200,
		statusText: 'Success',
		message: msg,
		data: currencyRate
	});

      } catch (error) {
        console.log(error)
      }
});

module.exports = router;