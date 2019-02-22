// var abc = {}
// abc["my-name"]= "k"
// console.log(abc["my-name"]+'k')
var x = document.getElementById("uname")
// x.type = "checkbox"
x.name = "select"
x.id = "check"
// x.disabled = true
x.readOnly = true
var y = document.getElementById('container')
var label = document.createElement('label');
label.id = 'lblFirstName'
label.innerHTML = "Welcome"
y.appendChild(label)
y.style="background-color: red"
// function createElement(type,id){

// }