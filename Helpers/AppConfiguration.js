const mode = {
  production: 'http://data.fixer.io/'
}

const baseURL = mode.production
const apiURL = 'api/'

const urlPaths = {

  //Currency Rate
  currencyRate : baseURL + apiURL + 'latest',

}

module.exports = urlPaths
