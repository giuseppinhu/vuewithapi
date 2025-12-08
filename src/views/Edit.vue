<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const tokenConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

const router = useRouter()

const form = reactive({
  email: '',
  name: '',
  id: -1,
  error: undefined,
})

form.id = router.currentRoute.value.params.id

axios
  .get(`https://api-users-smoky.vercel.app/user/${form.id}`, tokenConfig)
  .then((res) => {
    console.log(res)
    form.name = res.data.name
    form.email = res.data.email
  })
  .catch((err) => {
    var msgError = err.response.data.error
    form.error = msgError
  })

const update = () => {
  axios
    .put(
      `https://api-users-smoky.vercel.app/user/`,
      {
        id: form.id,
        email: form.email,
        name: form.name,
      },
      tokenConfig,
    )
    .then((res) => {
      router.push('/admin/users')
    })
    .catch((err) => {
      var msgError = err.response.data.error
      form.error = msgError
    })
}
</script>
<template>
  <div class="update-container">
    <div class="update-card">
      <button class="btn-back" @click="$router.push('/')">← Voltar</button>
      <h1 class="title is-3 mb-2">Editar Usuário</h1>
      <p class="subtitle is-6 mb-4">Atualize as informações cadastradas no sistema</p>

      <div v-if="form.error != undefined">
        <div class="notification is-danger is-light custom-notification">
          <button class="delete" @click="form.error = undefined"></button>
          {{ form.error }}
        </div>
      </div>

      <input
        type="text"
        placeholder="Nome do Usuário"
        class="input custom-input"
        v-model="form.name"
      />

      <input type="email" placeholder="Email" class="input custom-input" v-model="form.email" />

      <button class="button custom-button" @click="update">Salvar Alterações</button>
    </div>
  </div>
</template>

<style scoped>
/* Container centralizado */
.update-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6d28d9;
  width: 100%;
  min-height: 100vh;
}

.title {
  color: #3b0764;
}

/* Card estilizado */
.update-card {
  background: white;
  padding: 35px;
  width: 100%;
  max-width: 480px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

/* Inputs */
.custom-input {
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #dbdbdb;
  transition: 0.25s;
  color: #3b0764;
  background-color: #eee;

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
  display: inline-block;

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
