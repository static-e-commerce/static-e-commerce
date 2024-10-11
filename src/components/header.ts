document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("loginContainer") as HTMLDivElement;
    const loginLink = document.getElementById("loginLink") as HTMLAnchorElement;
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