<script setup>
import { ref } from 'vue'
// Aquí importarías tu store si ya lo tienes armado

const credenciales = ref({
  usuario: '',
  password: ''
})

const hacerLogin = () => {
  console.log("Iniciando sesión...")
}

// ==========================================
// CONFIGURACIÓN DE LAS ESTRELLAS SÚPER LOCAS
// ==========================================
const opcionesEstrellas = {
  background: {
    color: { value: "#050505" } // Un negro profundo
  },
  particles: {
    number: {
      value: 150, // Cantidad de estrellas
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "star"
    },
    opacity: {
      value: 0.8,
      random: true // Algunas brillan más que otras
    },
    size: {
      value: 6,
      random: true // Tamaños diferentes = Efecto Paralax visual
    },
    move: {
      enable: true,
      direction: "bottom", // ¡Aquí hacemos que bajen!
      speed: 4, // Velocidad (puedes subirle si las quieres más locas)
      outModes: {
        default: "out" // Cuando salen por abajo, reaparecen arriba (Scroll infinito)
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse" // Al pasar el ratón, las estrellas huyen
      }
    },
    modes: {
      repulse: {
        distance: 100, // Qué tan lejos huyen del ratón
        duration: 0.4
      }
    }
  }
}

</script>

<template>

  <div class="vh-100 vw-100 position-relative bg-dark overflow-hidden d-flex justify-content-center align-items-center">
    <vue-particles id="tsparticles" :options="opcionesEstrellas" class="position-absolute w-100 h-100"
      style="z-index: 0; top: 0; left: 0;" />
    <div class="card bg-black text-white p-4 shadow-lg border-secondary position-relative"
      style="width: 100%; max-width: 400px; z-index: 10;">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Acceder al Diario</h2>
        <form @submit.prevent="hacerLogin">
          <div class="mb-3">
            <label class="form-label">Usuario</label>
            <input v-model="credenciales.usuario" type="text" class="form-control bg-dark text-white border-secondary"
              required>
          </div>
          <div class="mb-4">
            <label class="form-label">Contraseña</label>
            <input v-model="credenciales.password" type="password"
              class="form-control bg-dark text-white border-secondary" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>
.form-control:focus {
  background-color: #212529;
  color: white;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>