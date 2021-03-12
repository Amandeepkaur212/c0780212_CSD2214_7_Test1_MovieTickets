function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.paymentform.name.value;
    var email = document.paymentform.email.value;
    var mobile = document.paymentform.mobile.value;
    var cardno = document.paymentform.cardno.value;
    var date = document.paymentform.date.value;
    var cvv = document.paymentform.cvv.value;
    var cardname = document.paymentform.cardname.value;

    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = cardErr = dateErr = cvvErr = cardnameErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if(cardno == "") {
        printError("cardnoErr", "Please enter card number");
    } else {
            printError("cardnoErr", "");
            cardErr = false;
        }
    }
    if(cardname == "") {
        printError("cardameErr", "Please enter card name");
    } else {
            printError("cardnameErr", "");
            cardnameErr = false;
        }
     if(cvv == "") {
        printError("cvvErr", "Please enter cvv");
    } else {
            printError("cardnameErr", "");
            cvvErr = false;
        }
     if(date == "") {
        printError("dateErr", "Please enter date");
    } else {
            printError("cardnameErr", "");
            dateErr = false;
        }
    

    
  
    
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || cardErr || dateErr ||cvvErr ||cardnameErrr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Card number: " + cardno + "\n" +
                          "Date: " + date + "\n" +
                          "cvv: " + cvv + "\n";
                          "Card name: " + card + "\n" ;
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};