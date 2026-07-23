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
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group my-2">
          <label for="" class="fs-6 fw-semibold text-white">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-warning mt-2 mb-4">Iniciar Sesión</button>
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
</style>