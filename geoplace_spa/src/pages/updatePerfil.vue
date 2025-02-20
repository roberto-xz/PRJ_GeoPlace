<script setup>
import appHeader from "./component_s/app_header.vue";
</script>

<template>
  <div id="update-perfil-page">
    <appHeader @open-rmenu="toogleMenu" page_title="Página Principal" />

    <div class="profile-container">
      <header>
        <img src="/res/GenericProfile.jpg" alt="Foto de Perfil" />
        <span>Mudar foto</span>
      </header>

      <form>
        <label> Nome completo <input type="text" placeholder="Digite seu nome" /></label>
        
        <div class="input-group">
          <label> Nome de usuário <input type="text" placeholder="Usuário" /></label>
          <label> CPF (sem pontuação) <input type="text" placeholder="12312302332" /></label>
        </div>

        <label> Número para contato <input type="text" placeholder="+XX (xx) X.xxxx-xxxx" /></label>
        <label> Email para contato <input type="email" placeholder="cicrano@email.com" /></label>

        <div class="input-group">
          <label> Cidade onde Reside <input type="text" placeholder="Cidade" /></label>
          <label> Estado (UF) <input type="text" placeholder="UF" /></label>
        </div>

        <label class="checkbox-label">
          <input id="location-permission" type="checkbox" />
          Permitir que salve minha localização
        </label>

        <button id="update-btn">Atualizar</button>
        <button id="delete-btn">Excluir conta</button>
      </form>
    </div>
  </div>
</template>

<style scoped>


/* Centraliza a página e define a largura */
#update-perfil-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.profile-container {
  width: 80%;
  max-width: 600px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

/* Estiliza o cabeçalho do perfil */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

header span {
  margin-top: 10px;
  color: #3D677A;
  font-weight: bold;
  cursor: pointer;
}

/* Formulário */
form {
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  color: gray;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
}

/* Grupo de inputs para divisão em colunas */
.input-group {
  display: flex;
  justify-content: space-between;
}

.input-group label {
  width: 48%;
}

/* Checkbox */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 15px;
}

#location-permission {
  width: 20px;
}

/* Botões */
#update-btn, #delete-btn {
  width: 100%;
  padding: 12px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#update-btn {
  background-color: darkgreen;
  margin-top: 10px;
}

#delete-btn {
  background-color: #aa5151;
  margin-top: 5px;
}
</style>
