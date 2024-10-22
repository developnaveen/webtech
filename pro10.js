function handleMouseOver() {
document.getElementById("myElement").style.backgroundColor = "lightblue";
}
function handleMouseOut() {
document.getElementById("myElement").style.backgroundColor = "white";
}
function handleSubmit(event) {
    event.preventDefault();
    var input = document.getElementById("myInput").value;
    alert("Form submitted! Value entered: " + input);
}    