var submit_button = document.createElement("button")     
//First, create a button element for submitting the httpbin input.
submit_button.id = "button_id"								
// Declare the button's id.
var bin_title = document.createTextNode("Submit to HttpBin")      
// Next, create a text node "Submit to HttpBin" to be placed on the button.
submit_button.appendChild(bin_title)                            
// Append/place the "Submit to HttpBin" text on the button.
document.body.appendChild(submit_button)                	
// Finally, append the button to the body of the page. 


var p3 = document.createElement("p")
//creat the areas for where the output will go.
p3.id = "p3"
//provide ids.
var append3 = document.createTextNode("Httpbin Response: ")
//Create the text for node.
p3.appendChild(append3)
//now, append the text nodes to the ids.
document.body.appendChild(p3)
//now, append the ids to the body of the page. 




var display = function(whatDoesItSay)
	//This is where we create the text nodes for the content we will be recieving, such as
	//the "temp" and the "humidity" numbers.
	{
	p3.appendChild(document.createTextNode(whatDoesItSay.textContent))}





document.getElementById("button_id").addEventListener("click", function(event)
    //in this function, we will be sending our POST request, and receiving the information to place in our 
	//text node created above.
    {var bin_input = document.getElementById("bin").value
    //get the value of the input.
	var bin_request = new XMLHttpRequest()
	bin_request.open('POST', "http://httpbin.org/post", true)
    //start the POST request.
	bin_request.setRequestHeader('Content-Type', 'application/json')
    bin_request.addEventListener('load', function() 
        //add the next event listener in case there is an error.
        {
        if(bin_request.status >= 200 && bin_request.status < 400) 
        //as explained in class, lvl 200-400 messages are ok, but 400+ are usually error messages.
            {
            var response = JSON.parse(bin_request.responseText)
            var text = document.createTextNode(response.data)
                if(text === 'null')
					p3.appendChild(document.createTextNode("Nothing is here"))
                    //if there is a response is null, then we will get this error message in the console.
                else
                    display(text)
                    //if we do not get an error message, then load the content as usual.
            }
        else
            {
            console.log("Error in request for httpbin information" + bin_request.statusText)
            }
        })
        bin_request.send(JSON.stringify(bin_input))
        event.preventDefault()
})
        