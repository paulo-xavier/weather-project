// const fetch = require('node-fetch');



// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=boston';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '642ed199ebmsh227970cf574527bp1bf74bjsn44f6e337a112',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// const valueUser = document.getElementById('city').value; 
// let valueUser = document.getElementsByTagName("input")[0].value;
// console.log(valueUser); 



let buttonSubmit = document.getElementById('button-submit'); 


buttonSubmit.addEventListener('click', ()  => {
      console.log("clickou"); 

      let valueUser = document.getElementById('city').value; 
      console.log(valueUser); 
      

      


}); 







