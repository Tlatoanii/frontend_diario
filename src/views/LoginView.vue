<script setup>
import { ref } from 'vue'

const credenciales = ref({
  usuario: '',
  password: ''
})

const hacerLogin = () => {
  console.log("Iniciando sesión...")
}

</script>

<template>
  <div class="container-fluid vh-100 vw-100 bg-login d-flex align-items-center justify-content-center">
    <div class="container card col-4 bg-transparent bg-opacity-25 custom-blur shadow-lg d-flex align-items-center">
      <form class="col-10">
        <div class="form-group my-2">
          <p class="h2 text-white text-center mb-2 mt-4"><strong>Bienvenido</strong></p>
          <label for="" class="fs-6 fw-semibold text-white">Usuario</label>
          <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de usuario">
        </div>
        <div class="form-group my-2">
          <label for="" class="fs-6 fw-semibold text-white">Contraseña</label>
          <input type="password" class="form-control input" id="exampleInputPassword1" placeholder="Contraseña">
        </div>
        <button type="submit" class="comic-button mt-2 mb-4">
            Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg-login {
  background-image: url('../assets/login.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.custom-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
}

.comic-button {
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  cursor: pointer;
}

.comic-button:hover {
  background-color: #fff;
  color: #ff5252;
  border: 2px solid #ff5252;
  box-shadow: 5px 5px 0px #ff5252;
}

.comic-button:active {
  background-color: #fcf414;
  box-shadow: none;
  transform: translateY(4px);
}

.input {
  min-width: 190px;
  padding: 0.875rem;
  font-size: 1rem;
  border: 1.5px solid #000;
  border-radius: 0.5rem;
  box-shadow: 2.5px 3px 0 #000;
  outline: none;
  transition: ease 0.25s;
}

.input:focus {
  box-shadow: 5.5px 7px 0 black;
}


</style>