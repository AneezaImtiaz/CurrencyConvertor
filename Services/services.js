const axios =  require('axios')

getRequest = async function (url)  {
	try {
		let response = await axios.get(url)
		let { data, status, statusText } = await response

		if (status == 200) {
		  return [data, statusText]
		} else {
		  throw { message: statusText }
		}
	  } catch (error) {
		throw error.message
	  }
}

module.exports = getRequest
