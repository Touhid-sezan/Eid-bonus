// code for welcome button
var welcomeButton = document.getElementById("welcome-button");
welcomeButton.addEventListener("click", function(){
    var formSection = document.getElementById("my-forms");
    document.getElementById("welcome-page").style.display = "none";
    formSection.style.display = "block";
})

// Log in button code

var enterButton = document.getElementById("enter-button");
enterButton.addEventListener("click",function(){
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    
if (firstName == "") {
    alert("Please write your name");
} else {
    document.getElementById("surprise-section").style.display = "block";
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("my-forms").style.display = "none";
}
    
})
