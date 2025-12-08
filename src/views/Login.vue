<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const form = reactive({
  password: '',
  email: '',
  error: undefined,
})

const login = () => {
  axios
    .post('https://api-users-smoky.vercel.app/login', {
      email: form.email,
      password: form.password,
    })
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      router.push('/')
    })
    .catch((err) => {
      var msgError = err.response.data.error
      form.error = msgError
    })
}
</script>

<template>
  <transition name="fade">
    <div class="login-wrapper">
      <div class="login-card">
        <button class="btn-back" @click="$router.push('/')">← Voltar</button>
        <h1 class="title is-3 has-text-centered mb-3">Acessar Conta</h1>
        <p class="subtitle is-6 has-text-centered mb-4">Entre para continuar usando o sistema</p>

        <!-- NOTIFICAÇÃO DE ERRO -->
        <transition name="slide-down">
          <div v-if="form.error" class="notification is-danger mb-4 custom-notification">
            <button class="delete" @click="form.error = undefined"></button>
            {{ form.error }}
          </div>
        </transition>

        <!-- CAMPOS -->
        <div class="field">
          <input
            type="email"
            placeholder="Seu e-mail"
            class="input custom-input"
            v-model="form.email"
          />
        </div>

        <div class="field">
          <input
            type="password"
            placeholder="Sua senha"
            class="input custom-input"
            v-model="form.password"
          />
        </div>

        <!-- BOTÃO -->
        <button class="button is-fullwidth mt-2 custom-button" @click="login">Entrar</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Centraliza tudo */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: #6d28d9;
}

/* Card bonitão */
.login-card {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 35px 30px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
  animation: fadeUp 0.5s ease;
}

.title {
  color: #3b0764;
}

/* Inputs */
.custom-input {
  border-radius: 10px;
  background: #eee;
  color: #3b0764;
  padding: 12px;
  border: 1px solid #dbdbdb;
  transition: 0.25s;

  &::placeholder {
    color: #0a0000;
  }
}

.custom-input:focus {
  border-color: #3b0764 !important;
  box-shadow: 0 0 0 0.15rem rgba(125, 72, 199, 0.25);
}

/* Botão */
.custom-button {
  padding: 12px;
  font-weight: 600;
  border-radius: 10px;
  transition: 0.25s;
}

.custom-button:hover {
  transform: translateY(-1px);
}

/* Notificação */
.custom-notification {
  border-radius: 10px;
}

/* Transições suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active {
  animation: slideDown 0.45s ease-out;
}
.slide-down-leave-active {
  animation: slideDown 0.3s reverse ease-in;
}

.btn-back {
  background: #f0f0f0;
  color: #0a0000;
  border: none;
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
  margin-bottom: 20px;
}

.btn-back:hover {
  background: #e2e2e2;
  transform: translateY(-2px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
