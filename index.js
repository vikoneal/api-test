const axios = require('axios')

const apiEndpoint = 'https://badge42.herokuapp.com/api/project/jaeskim/ft_printf';
const delayTime = 600;
const numberTest = 1250;

const stressApi = (fun, time, limit, it = 0) => {
	if (it < limit){
		setTimeout(() => {
      fun();
		  return stressApi(fun, time, limit, it + 1);
    }, time);
	}
}

const apiCall = () => {
  axios.get(`${apiEndpoint}`)
  .then(res => {
    console.log(res.data.innerHTML);
  })
  .catch(err => {
    console.log(err);
  });
}

stressApi(apiCall, delayTime, numberTest);
