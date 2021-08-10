
function validate(){
    var username=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
    if(username=="admin@gonow.com" && password=="admin"){
        alert("login successfully");
        return false
    }
    else{
        alert("login failed");
    }

}


function sendEmail() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var subject = document.getElementById("subject").value;
	Email.send({
	Host: "smtp.gmail.com",
	Username : "hireintomnc@gmail.com",
	Password : "hireinto@123",
	To : 'hrconnect@himsoftware.com',
	From : "hireintomnc@gmail.com",
	Subject : fname  +" "+ lname + " sent a new message from website",
	Body : subject,
	}).then(
		message => alert("mail sent successfully. Thak you "+ fname  +" for your interest. Click on cancel to return to home page")
      
	);  

 
}
