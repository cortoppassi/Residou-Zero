document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    // Simulação de login bem-sucedido
    if (email === "admin@residuozero.com" && password === "123456") {
        window.location.href = "../residouZero/residouZero.html";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Email ou senha incorretos. Tente novamente.";
    }
});
