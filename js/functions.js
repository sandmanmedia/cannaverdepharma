function validateForm() {
    var x = document.forms["subscribe"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["subscribe"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    } else {
    	if(!validateEmail(y)) {
    		alert("email is not valid");
        	return false;
    	}
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}