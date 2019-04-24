var myPosts = [{
    text: '',
    time: ''
}]

function createPost() {
    var postContent = document.getElementById('myPost');
    var postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML='';
    myPosts.push({
        text: postContent.value,
        time: new Date()
    });
    for (var i = myPosts.length-1; i >= 0; i--) {
        var myCard = `<div class="card">
                    <div class="card-body">
                        ${myPosts[i].text} ${myPosts[i].time}
                    </div>
                 </div>`;
        postsContainer.innerHTML += myCard;
    }
    postContent.value = '';
}