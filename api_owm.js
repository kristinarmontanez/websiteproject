var apiKey = "3ab2fce64f2f6e0d1396fa31cf900d8b"
//as explained in the material, always keep your API key separate at the top for easy changes.


var weather_submit = document.createElement("button")     
// First, create a button element for submitting the city or zip request.
weather_submit.id = "button_id1"								
// Declare button's id.
var submit_node = document.createTextNode("Submit")      
// Next, create a text node "Submit" to be placed on the button.
weather_submit.appendChild(submit_node)                             
// Append/place the "Submit" text on the button.
document.body.appendChild(weather_submit);                	
// Finally, append the button to the body of the page. 



document.getElementById("button_id1").addEventListener("click", function()
	//in this function, we will be sending our GET request, and receiving the information to place in our 
	//text nodes created above.
	{
	var city = document.getElementById("city").value
	var zip = document.getElementById("zip").value
	var country = document.getElementById("country").value
	//get the values of each input given.
	if(zip == "" || zip == null)
		{ 
		request_url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey}
	if(city == "" || city == null)
		{ 
		request_url = "https://api.openweathermap.org/data/2.5/weather?q=" + zip + "," + country + "&units=imperial&appid=" + apiKey}
	//if the user gives us a city code, we will send a request with the city in GET request, and vise versa.
	//also, while looking through the website, Open Weather Map gives you imperial measurements too.
		
	var weather_request = new XMLHttpRequest()
	weather_request.open('GET', request_url, true)
	//start the GET request. 
		weather_request.addEventListener('load', function() 
		//add the next event listener in case there is an error.
        	{
			if(weather_request.status >= 200 && weather_request.status < 400)
				//as explained in class, lvl 200-400 messages are ok, but 400+ are usually error messages.
				{
				var response = JSON.parse(weather_request.responseText)
			  	var temperature = document.createTextNode(response.main.temp)
				var humidity = document.createTextNode(response.main.humidity)
				//grab the object's name from each-temp and humidity. Don't forget to use
				//"createTextNode" as this will allow you to transform data into a string text. 
				//THIS PART TOOK WAY TO LONG TO DEBUG...
				var temp = document.getElementById("result1") 
				var humid = document.getElementById("result2")
				//Then place these items to their places after the first form.
				temp.appendChild(document.createTextNode(temperature.textContent))
				humid.appendChild(document.createTextNode(humidity.textContent))
				//if we do not get an error message, then load the content as usual.
				}
			else 
				{
			  	console.log("Error in request for weather information" + weather_request.statusText)
				  //if there is a response in the 400+, then we will get this error message in the console.
				}
			})
		weather_request.send(JSON.stringify(city))})
		//we then turn the information back into a string.
	
	
