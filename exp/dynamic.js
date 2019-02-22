var count = 0;
function createPost() {
    var postContent = document.getElementById('myPost');
    var postContainer = document.getElementById('postContainer');
    var myCard = `<div class="card mt-3 iCard" id="iCard" style="width: 18rem">
                    <img class="card-img-top" src="./`+count+`.png" alt="Card image cap">
                    <div class="card-body">
                        ${postContent.value}
                    </div>                
                    <div style="text-align: right">
                        ${getTime()}
                    </div>
                  </div>`;
    postContainer.innerHTML=myCard+postContainer.innerHTML;
    postContent.value='';
    count = (count+1)%4;
    // createPost();
    document.getElementsByClassName("iCard").addEventListener("dblclick",
        function removeCard(){
            for(var i=0; i<this.length; i++)
            this[i].style.visibility =  "hidden";
        })
}
function getTime(){
    var hour = new Date().getHours()
    var min = new Date().getMinutes()
    var date = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var time = date+"-"+month+"-"+year+"\t"+hour+":"+min
    return time
}

var btn = document.getElementById("btn")
btn.addEventListener("click",createPost)
// btn.addEventListener("dblclick",createPost)



