<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  name: '',
  error: undefined,
})

const register = () => {
  axios
    .post('https://api-users-smoky.vercel.app/user', {
      email: form.email,
      name: form.name,
      password: form.password,
    })
    .then((res) => {
      console.log(res)
      router.push('/')
    })
    .catch((err) => {
      var msgError = err.response.data.error
      form.error = msgError
    })
}
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <button class="btn-back" @click="$router.push('/')">← Voltar</button>
      <h1 class="title is-3 mb-2">Criar Conta</h1>
      <p class="subtitle is-6 mb-4">Preencha os dados para cadastrar um novo usuário</p>

      <div v-if="form.error != undefined">
        <div class="notification is-danger is-light custom-notification">
          <button class="delete" @click="form.error = undefined"></button>
          {{ form.error }}
        </div>
      </div>

      <input
        type="text"
        placeholder="Nome do usuário"
        class="input custom-input"
        v-model="form.name"
      />

      <input type="email" placeholder="Email" class="input custom-input" v-model="form.email" />

      <input
        type="password"
        placeholder="Senha"
        class="input custom-input"
        v-model="form.password"
      />

      <button class="button custom-button" @click="register">Cadastrar</button>
    </div>
  </div>
</template>

<style scoped>
/* Container centralizado */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #6d28d9;
}

/* Card */
.register-card {
  background: white;
  padding: 35px;
  width: 100%;
  max-width: 480px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.title {
  color: #3b0764;
}

/* Inputs */
.custom-input {
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #dbdbdb;
  transition: 0.25s;
  border-radius: 10px;
  background: #eee;
  color: #3b0764;

  &::placeholder {
    color: #0a0000;
  }
}

.custom-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
}

/* Botão */
.custom-button {
  margin-top: 10px;
  padding: 12px;
  border-radius: 12px;
  font-weight: 600;
  width: 100%;
  transition: 0.25s;
}

.custom-button:hover {
  transform: translateY(-2px);
}

/* Notificação */
.custom-notification {
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
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
</style>
