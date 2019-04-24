var socket = io.connect('http://localhost:3005')
var users = [];
$('#submit').bind('click', () =>{
    socket.emit('USER_JOIN', $('#name').val())
})
socket.on('USER_CONNECTED',(data)=>{
    console.log(data);
    users.push(data);
    let htmlString = `<p >${data.id}</p><p>${data.userName}</p><br/>`
    $('#message').append(htmlString)
})
socket.on('USER_DISCONNECTED',(data)=>{
    console.log(data)
})