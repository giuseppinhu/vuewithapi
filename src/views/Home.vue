<template>
  <div class="page">
    <!-- NAVBAR -->
    <nav class="navbar">
      <div style="width: 120px; height: 100px; background-color: #eee; border-radius: 2rem">
        <img
          src="../../public/image.png"
          alt="Logo"
          style="height: 100%; margin: auto; display: block"
        />
      </div>
      <button class="nav-btn" @click="goToLogin">Entrar</button>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Aprenda Consumir APIs na Prática</h1>
        <p class="hero-text">
          Este projeto foi criado para treinar consumo de APIs, rotas, autenticação e manipulação de
          dados em um ambiente real utilizando Vue.
        </p>
        <button class="hero-btn" @click="goToLogin">Começar Agora</button>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="how-section">
      <h2 class="section-title">Como Funciona</h2>

      <div class="steps">
        <div class="step">
          <span class="number">1</span>
          <h3>Consumo de API</h3>
          <p>
            O projeto faz chamadas reais para APIs: login, listagem de usuários, filtros e
            manipulação de dados.
          </p>
        </div>

        <div class="step">
          <span class="number">2</span>
          <h3>Vue</h3>
          <p>
            A arquitetura usa o que há de mais moderno no Vue, com componentes simples, rápidos e
            fáceis de manter.
          </p>
        </div>

        <div class="step">
          <span class="number">3</span>
          <h3>Vue Router</h3>
          <p>
            Rotas reais simulando um projeto completo: login, dashboard, perfis de usuários e muito
            mais.
          </p>
        </div>
      </div>
    </section>

    <!-- ROTAS DO CRUD -->
    <section class="routes-section">
      <h2 class="section-title">Rotas do Sistema</h2>

      <p class="routes-info">
        Este projeto simula um sistema real com fluxo completo de CRUD, incluindo páginas para
        listagem, criação, edição e exclusão de usuários. Abaixo estão todas as rotas implementadas:
      </p>

      <div class="routes-grid">
        <div class="route-card">
          <h3>/login</h3>
          <p>Página de autenticação. O usuário informa email e senha para acessar o sistema.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/login')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/register</h3>
          <p>Página para criar um novo usuário. Envia os dados via POST para a API.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/register')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/admin/users</h3>
          <p>Lista de usuários consumida via API. Contém todos os usuários e ações do CRUD.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/admin/users')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/admin/edit/:id</h3>
          <p>
            Página para editar um usuário. Preenche os campos automaticamente e envia a atualização
            via PUT para a API.
          </p>

          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/admin/users')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/admin/user/:id</h3>
          <p>Página de confirmação de exclusão. Remove o usuário via DELETE.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/admin/users')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/recoverpassword</h3>
          <p>Página para recuperação de senha.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/recoverpassword')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/changepassword</h3>
          <p>Página para alterar a senha - acessada só a após recuperar a senha.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/changepassword')"
          >
            Acessar →
          </button>
        </div>

        <div class="route-card">
          <h3>/logged</h3>
          <p>Página para mostra infomações do usuário - acessada só a após logar.</p>
          <button
            class="button is-link is-light is-fullwidth route-button"
            @click="$router.push('/logged')"
          >
            Acessar →
          </button>
        </div>
      </div>
    </section>

    <!-- CARDS -->
    <section class="cards-section">
      <h2 class="section-title">Tecnologias Utilizadas</h2>

      <div class="cards">
        <div class="card">
          <h3>⚡ Vue</h3>
          <p>Framework moderno, rápido e baseado em componentes reativos.</p>
        </div>

        <div class="card">
          <h3>🧭 Vue Router</h3>
          <p>Gerenciamento de rotas real com navegação entre páginas.</p>
        </div>

        <div class="card">
          <h3>🔐 Autenticação</h3>
          <p>Login real com fluxos de token e validação de sessão.</p>
        </div>

        <div class="card">
          <h3>📡 APIs REST</h3>
          <p>Requisições HTTP reais, com axios ou fetch.</p>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>Projeto criado apenas para fins de estudo – Consumo de API com Vue.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToLogin = () => router.push('/login')
</script>

<style scoped>
/* General */
.page {
  width: 100%;
  min-height: 100vh;
  background: #f6f5ff;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 40px;
  background: rgba(20, 0, 60, 0.5);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
}

.logo {
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
}

.nav-btn {
  padding: 10px 18px;
  background: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: #4f46e5;
  transition: 0.3s;
}
.nav-btn:hover {
  background: #e5e5ff;
}

/* HERO */
.hero {
  padding: 160px 40px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #6d28d9);
  color: white;
  flex-wrap: wrap;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.hero-text {
  font-size: 1.2rem;
  opacity: 0.95;
  margin-bottom: 30px;
}

.hero-btn {
  padding: 14px 32px;
  background: white;
  border: none;
  color: #4f46e5;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.hero-btn:hover {
  background: #e5e5ff;
}

.hero-image img {
  width: 210px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
  animation: float 3s infinite ease-in-out;
}

/* Floating animation */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* HOW IT WORKS */
.how-section {
  padding: 80px 40px;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 50px;
  color: #2e1065;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.step {
  background: white;
  padding: 25px;
  width: 280px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s;
}
.step:hover {
  transform: translateY(-8px);
}

.number {
  display: inline-block;
  background: #6d28d9;
  color: white;
  padding: 8px 16px;
  font-size: 1.2rem;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* CARDS */
.cards-section {
  padding: 80px 40px;
  background: #eceaff;
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.card {
  background: white;
  height: 100%;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.09);
  transition: transform 0.25s;
}
.card:hover {
  transform: translateY(-8px);
}

.card h3 {
  margin-bottom: 10px;
  color: #4f46e5;
}

/* ROTAS */
.routes-section {
  padding: 80px 40px;
  text-align: center;
}

.routes-info {
  max-width: 700px;
  margin: 0 auto 40px;
  color: #3b0764;
  font-size: 1.1rem;
  opacity: 0.9;
}

.routes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.route-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.09);
  transition: transform 0.25s ease;
  border-top: 4px solid #6d28d9;
}

.route-card:hover {
  transform: translateY(-8px);
}

.route-card h3 {
  margin-bottom: 10px;
  color: #4f46e5;
  font-size: 1.3rem;
}

.route-card p {
  opacity: 0.85;
  line-height: 1.5;
  margin-bottom: 10%;
}

/* FOOTER */
.footer {
  padding: 25px;
  background: #4f46e5;
  color: white;
  text-align: center;
  margin-top: 60px;
}
</style>
