 document.addEventListener("DOMContentLoaded", function(event) {
 	sendAjaxRequest();
 });

 function sendAjaxRequest() {
 	let xhr = new XMLHttpRequest();
 	let url = 'http://alex.devel.softservice.org/testapi/';
 	xhr.open('GET', url);

 	xhr.addEventListener('load', function () {
 		if (xhr.status === 200) {
 			successHandler(xhr.response);
 		} else {
 			errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
 		}
 	});
 	xhr.send();
 }

 function successHandler(response) {
 	response = JSON.parse(response);
 	if (response.balance_usd) fillBar(response.balance_usd); 
 }

 function errorHandler(error) {
 	alert(error);
 }

 function fillBar(value) {
 	value = Number(value);
 	const GOAL_TARGET = Number(document.getElementById('target').innerHTML);
 	let textCounter =  document.getElementById('counter').innerHTML;
 	let bar = document.getElementById('bar');
 	let fillPart = (value /GOAL_TARGET)*100;
 	let width = bar.style.width;
 	
 	const step = (value - Number(textCounter)) / fillPart;

 	let fillFunc = setInterval(function(){
 		if (width >= fillPart) {
 		clearInterval(fillFunc);
	} else {
 		width++; 
 		bar.style.width = width + '%'; 
 		increaseCounter(step, value) ;
 	}
 	}, 10);
 }

 function increaseCounter(step, value) {
		let startValue = Number(document.getElementById('counter').innerHTML);
 		let	endValue = Number(startValue) + Number(step);
 		endValue > value ? endValue = value : endValue = endValue.toFixed(1);
  		document.getElementById('counter').innerHTML =  endValue;
 }
