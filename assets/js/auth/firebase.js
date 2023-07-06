// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB5885QLowWMBKNq5Nyxv18k3ZXoSEhNhw",
    authDomain: "api-estoque.firebaseapp.com",
    projectId: "api-estoque",
    storageBucket: "api-estoque.appspot.com",
    messagingSenderId: "261495651154",
    appId: "1:261495651154:web:733652c5d064268aa6588b",
    measurementId: "G-YN35JG90KD"
  };
  
  // Inicialização do Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Obtenha uma instância do serviço de autenticação
  var auth = firebase.auth();
  
  // Implemente a lógica de login
  function login() {
    var email = document.querySelector(".email").value;
    var senha = document.querySelector(".senha").value;
  
    auth.signInWithEmailAndPassword(email, senha)
      .then(function(user) {
        alert("Login bem-sucedido!");
        window.location = "assets/pages/main.html"
      })
      .catch(function(error) {
        // Trate erros de login aqui
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Erro: " + errorCode + " - " + errorMessage);
      });
  }