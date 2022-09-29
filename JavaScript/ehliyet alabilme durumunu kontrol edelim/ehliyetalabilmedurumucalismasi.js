
let userName = prompt("Adınızı Giriniz:")
let age = prompt("Yaşınızı Giriniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = ` ${userName},  Ehliyet Alabilirsiniz.`
} else if (!userName) {
    info.innerHTML = `Adınızı Girmediğiniz İçin Kullanıcı Bilginiz Eşleştirilemedi.`
} else if (!(age>=18)) {
    info.innerHTML = `${userName}, Yaş Bilginiz Ehliyet Almak İçin Uygun Aralıkta Değil.`
}