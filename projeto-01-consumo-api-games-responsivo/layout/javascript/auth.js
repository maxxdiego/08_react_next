// AXIOS CONFIG
const axiosConfig = {
  headers: {
    authorization: "Bearer " + localStorage.getItem("token"),
  },
};

// LOGIN
async function login() {
  try {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const email = emailField.value;
    const password = passwordField.value;

    const res = await axios.post("http://localhost:4000/auth", {
      email,
      password,
    });
    const token = res.data.token;
    localStorage.setItem("token", token);
    axiosConfig.headers.authorization =
      "Bearer " + localStorage.getItem("token");
    // alert("Login realizado com sucesso!");
    location.href = "home.html";
  } catch (error) {
    alert("Não foi possível realizar o login. Erro: " + error);
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  // alert("Deslogado com sucesso!");
  location.href = "index.html";
}
