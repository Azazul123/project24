function required(){
    var Name = document.getElementById('name').value;
    var User = document.getElementById('userName').value;
    var Email = document.getElementById('email').value;
    var Date = document.getElementById('date').value;
    var Pass = document.getElementById('pass').value;
    if (Name == ""){
        alert("Please Enter your Name first!");
        return false;
    }
    else if(User == ""){
        alert("Please Enter User Name first!");
        return false;
    }
    else if(Email == ""){
        alert("Please Enter your Email Address!");
        return false;
    }
    else if(Date == ""){
        alert("Your Date of Birth!");
        return false;
    }
    else if(Pass == ""){
        alert("Provide a Password Please!");
        return false;
    }

    else {
        alert('Successfully Signed up.');
        return true; 
    }
}

function signinn(){
    var Mail = document.getElementById('mail').value;
    var Pass = document.getElementById('pass').value;
    if(Mail == ""){
        alert('Please provide your mail first!');
        return false;
    }
    else if(Pass == ""){
        alert('Provide your Correct Password!');
        return false;
    }
    else{
        alert("Login Successfully.");
        return true;
    }
}
