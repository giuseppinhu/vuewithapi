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
        <h1 class="hero-title">Bem-vindo, {{ data.user.name }}!</h1>
        <p class="hero-text">Você está logado como: {{ data.user.email }}</p>
        <p class="hero-text">{{ data.user.role === 1 ? 'Administrador' : 'Usuário' }}</p>
        <button class="hero-btn" @click="goToHome">Home</button>
      </div>
    </section>

    <div class="user-card">
      <h3>Meus Dados</h3>
      <p><strong>ID:</strong>{{ data.user.id }}</p>
      <p><strong>Nome:</strong>{{ data.user.name }}</p>
      <p><strong>Email:</strong>{{ data.user.email }}</p>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      <p>Projeto criado apenas para fins de estudo – Consumo de API com Vue.</p>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()

const goToHome = () => router.push('/')

var data = reactive({
  user: {},
})

axios
  .post('https://api-users-smoky.vercel.app/userbytoken', {
    token: localStorage.getItem('token'),
  })
  .then((res) => {
    console.log(res.data.user)
    data.user = res.data.user
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
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
  float: right;
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

/* USER CARD */
.user-card {
  max-width: 500px;
  margin: 60px auto;
  background: white;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.09);
  border-left: 5px solid #6d28d9;
}

.user-card h3 {
  color: #4f46e5;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.user-card p {
  margin: 12px 0;
  font-size: 1rem;
  color: #3b0764;
  line-height: 1.6;
}

.user-card p strong {
  color: #4f46e5;
  font-weight: 600;
}
</style>
