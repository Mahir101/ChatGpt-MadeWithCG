function moveButton(event) {
    // if (validateForm()) {
        var submitBtn = document.getElementById("submit-btn");
        var buttonWidth = submitBtn.getBoundingClientRect().right-submitBtn.getBoundingClientRect().left; // width of the button
        var minLeft = 550; // minimum left position
        var maxLeft = 850; // maximum left position
        var mouseX = event.clientX; // mouse cursor x position
        var buttonX = submitBtn.getBoundingClientRect().left; // button x position

        if (mouseX < buttonX) {
            // move button to the right
            if (buttonX + buttonWidth < maxLeft) {
                submitBtn.style.left = (buttonX + buttonWidth) + "px";
            } else {
                submitBtn.style.left = minLeft + "px";
            }
        } else {
            // move button to the left
            if (buttonX > minLeft) {
                submitBtn.style.left = (buttonX - buttonWidth) + "px";
            } else {
                submitBtn.style.left = maxLeft + "px";
            }
        }
    //}
}

//write function validateform
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

