"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("loginContainer");
    const loginLink = document.getElementById("loginLink");
    const prenom = localStorage.getItem("prenom");
    if (prenom) {
        // L'utilisateur est connecté
        // Remplacer le lien par un span non cliquable
        const userSpan = document.createElement("span");
        userSpan.innerHTML = `<i class="fa-solid fa-user"></i> ${prenom}`;
        userSpan.id = "userDisplay";
        loginContainer.replaceChild(userSpan, loginLink);
    }
});
