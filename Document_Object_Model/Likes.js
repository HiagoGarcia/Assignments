var Nile_likes=9;
var Nichole_likes=12;
var Jim_likes=9
var likes=3
var likeselement = document.querySelector("#likes");
var nileselement = document.querySelector("#Nile_likes");
var nicholeselement = document.querySelector("#Nichole_likes");
var jimselement = document.querySelector("#Jim_likes");

function add() {
    likes++;
    likeselement.innerText = likes +  " like(s)";
    console.log(likes)
}

function nile() {
    Nile_likes++;
    nileselement.innerText = Nile_likes + " like(s)";
}

function nichole() {
    Nichole_likes++;
    nicholeselement.innerText = Nichole_likes + " like(s)";
}

function jim() {
    Jim_likes++;
    jimselement.innerText = Jim_likes + " like(s)";
}