let message = document.getElementById("message")

message.addEventListener("keyup", function (event) {
    console.log(event);
    const text1 = document.getElementById("textbox1")
    const text2 = document.getElementById("textbox2")

    text1.innerHTML += message.value;
    text2.innerHTML += message.value;
})

