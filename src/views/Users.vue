<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const data = reactive({
  user: [],
  showModal: false,
  nameUser: '',
  idUser: -1,
})

const tokenConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

axios.get('https://api-users-smoky.vercel.app/users', tokenConfig).then((res) => {
  console.log(res)
  data.user = res.data
})

const roles = {
  0: 'User',
  1: 'Admin',
}

const toggleModal = (id, name) => {
  if (!data.showModal) {
    data.nameUser = name
    data.idUser = id
    return (data.showModal = true)
  } else {
    return (data.showModal = false)
  }
}

const deleteUser = () => {
  axios
    .delete(`https://api-users-smoky.vercel.app/user/${data.idUser}`, tokenConfig)
    .then(() => {
      data.showModal = false

      data.user = data.user.filter((i) => i.id != data.idUser)
    })
    .catch((error) => {
      console.log(error)
      showModal = false
    })
}
</script>

<template>
  <div class="admin-container">
    <div class="admin-card">
      <button class="btn-back" @click="$router.push('/')">← Voltar</button>
      <h1 class="title is-3 mb-3">Painel Administrativo</h1>
      <p class="subtitle is-6 mb-4">Gerencie usuários cadastrados no sistema</p>

      <table class="table is-fullwidth custom-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th class="has-text-centered">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in data.user" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ roles[user.role] }}</td>

            <td class="actions">
              <button class="btn-delete" @click="toggleModal(user.id, user.name)">Deletar</button>

              <router-link :to="{ name: 'edit', params: { id: user.id } }">
                <button class="btn-edit">Editar</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="has-text-right mt-4">
        <router-link to="/register">
          <button class="btn-register">Novo Usuário</button>
        </router-link>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <div :class="{ modal: true, 'is-active': data.showModal }">
    <div class="modal-background" @click="toggleModal"></div>

    <div class="modal-content">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Confirmar exclusão</p>
        </header>

        <div class="card-content">
          <p>
            Deseja realmente excluir o usuário
            <strong>{{ data.nameUser }}</strong
            >?
          </p>
        </div>

        <footer class="card-footer">
          <button class="card-footer-item" @click="toggleModal">Cancelar</button>
          <button class="card-footer-item" @click="deleteUser">Excluir</button>
        </footer>
      </div>
    </div>

    <button class="modal-close is-large" aria-label="close" @click="toggleModal"></button>
  </div>
</template>

<style scoped>
/* Container */
.admin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6d28d9;
  width: 100%;
  min-height: 100vh;
}

/* Card principal */
.admin-card {
  background: white;
  padding: 35px;
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Tabela */
.custom-table {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  background: #f5f5f5;
  td,
  th {
    color: #0a0000;
    border-color: #eee3ee;
  }
}

.title {
  color: #3b0764;
}

.custom-table thead {
  background: #f5f5f5;
  th {
    color: #0a0000;
  }
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

/* Botões da tabela */
.btn-delete {
  background: #ff5c5c;
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.25s;
  font-weight: 600;
}

.btn-delete:hover {
  background: #e04646;
  transform: translateY(-2px);
}

.btn-edit {
  background: #f1c40f;
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  color: #4a4a4a;
  cursor: pointer;
  transition: 0.25s;
  font-weight: 600;
}

.btn-edit:hover {
  background: #d9ae0e;
  transform: translateY(-2px);
}

/* Botão Registrar */
.btn-register {
  background: #4caf50;
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  color: white;
  font-weight: 600;
  transition: 0.25s;
}

.btn-register:hover {
  transform: translateY(-2px);
}

/* Modal estilizado */
.custom-modal {
  max-width: 450px;
}

.custom-modal-card {
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Botões do Modal */
footer .cancel {
  background: #e0e0e0;
  border: none;
  color: #4a4a4a;
  transition: 0.25s;
}

footer .cancel:hover {
  background: #cecece;
}

footer .delete {
  background: #ff4d4d;
  border: none;
  color: white;
  transition: 0.25s;
}

footer .delete:hover {
  background: #e63c3c;
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
