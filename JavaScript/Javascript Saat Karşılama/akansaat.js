const userName = prompt("Adın Ne")

const timeTag = document.querySelector(".saat")
const userNameTag = document.querySelector("#username")

userNameTag.innerHTML = userName

function tarihSaat () {
    var date = new Date().toLocaleString('tr-TR');
    document.querySelector(".saat").innerHTML = date;
}
setInterval(tarihSaat, 1000);