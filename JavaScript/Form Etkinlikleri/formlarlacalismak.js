
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener("submit", formHandler)


const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const alertDOM = document.querySelector('#alert')

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        alertDOM.innerHTML = alertFunction(
            "Form Tamamlandı.",
            "Girişler Başarılı",
            "success"
        )
        USER_NAME.value = ""
        SCORE.value = ""

    } else if (!(USER_NAME.value) && SCORE.value) {
        alertDOM.innerHTML = alertFunction(
            "Dikkat !",
            "Kullanıcı Bilgisi Girmediniz!",
            "warning"
        )
        USER_NAME.value = ""
        SCORE.value = ""
    } else if (USER_NAME.value && !(SCORE.value)) {
        alertDOM.innerHTML = alertFunction(
            "Dikkat !",
            "Not Bilgisi Girmediniz!",
            "warning"
        )
        USER_NAME.value = ""
        SCORE.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction(
            "Dikkat !",
            "Hiçbir Bilgi Girmediniz !",
            "danger")
        USER_NAME.value = ""
        SCORE.value = ""
    }

}






/* <li class="list-group-item d-flex justify-content-between align-items-center">
<span class="badge bg-primary rounded-pill">14</span> */

let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName}<span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}