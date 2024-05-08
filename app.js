
const state = {
    data: {},
}

// Active navigation link

document.querySelectorAll(".nav-link").forEach(function(e) {
    e.addEventListener("click", function(item) {
        document.querySelectorAll(".nav-link").forEach(function(element) {
            element.classList.remove("active");
        })
       item.target.classList.add("active");
    })
});


// Menu btn

document.getElementById("menu-btn").addEventListener("click", function() {
    document.querySelector(".list-items").classList.toggle("active");
    document.getElementById("menu-btn").classList.toggle("bi-x");
});


// another solution 

Array.from(document.getElementsByClassName("nav-link")).forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector(".list-items").classList.remove("active");
        document.getElementById("menu-btn").classList.remove("bi-x");
        console.log("Katt");
    })
})


document.querySelector(".form--input-fields").addEventListener("submit", function(event) {
    event.preventDefault();
    state.data = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value
    }

    const mezok = document.querySelectorAll(".form--input-field");

    const mezokTomb = Array.from(mezok);

    mezokTomb.forEach( aktualisElem => {
        aktualisElem.value = "";
    });

    mezokTomb[0].focus();
})