var socket = io.connect('http://localhost:3005')
// socket.on('USER_CONNECTED',(data)=>{
//     console.log(data)
// })
// socket.on('USER_DISCONNECTED',(data)=>{
//     console.log(data)
// })

// var socket = '';
var users = [];
$('#submit').bind('click', () =>{
    // socket = io.connect('http://localhost:3005')
    socket.emit('USER_JOIN', $('#name').val())
    
})
socket.on('USER_CONNECTED',(data)=>{
    console.log(data);
    users.push(data);
    let htmlString = `<li class="list-group-item">${data.userName}</li>`
    $('#userList').append(htmlString)
})
socket.on('USER_DISCONNECTED',(data)=>{
    console.log(data)
})