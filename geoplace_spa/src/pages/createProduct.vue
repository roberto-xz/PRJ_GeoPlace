
<script setup>
      import appHeader from "./component_s/app_header.vue";
</script>

<template>

<div id='create-product-page'>
    <appHeader @open-rmenu = "toogleMenu" page_title="Pagina principal"/>
    <main>
        <div id='screen'>
            <div id='l-screen'>
                <h1>Adicione boas fotos</h1>
                <label class='label-image'>
                    <input type='file' placeholder="adicionar imagem"/>
                </label>
                <div id='collum-pictures'>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                </div>
                <h2>Caracteristicas</h2>
                <div id='details-box'></div>
                <button id='add-details-bnt'>Adicionar</button>
            </div>

             <div id="r-screen">
    <label> Título
      <input type="text" placeholder="Digite um título" />
    </label>
    
    <div class="input-group">
      <label> Cidade <input type="text" placeholder="Cidade" /></label>
      <label> UF (Estado) <input type="text" placeholder="UF" /></label>
    </div>
    
    <label> Preço final do imóvel ou mensal
      <input type="text" placeholder="Valor" />
    </label>
    
    <label> Localização
      <button id="map-btn">Abrir mapa</button>
    </label>
    
    <div class="input-group">
      <label> Tipo de contrato </label>
      <label><input type="radio" name="contrato" value="venda" /> Venda</label>
      <label><input type="radio" name="contrato" value="aluguel" /> Aluguel</label>
    </div>
    
    <label> Fale um pouco sobre o imóvel
      <textarea placeholder="Descrição"></textarea>
    </label>

    <div class="button-group">
      <button id="create-btn">Criar anúncio</button>
      <button id="cancel-btn">Cancelar</button>
    </div>
  </div>
        </div>
    </main>
</div>
</template>

<style scoped>
#create-product-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
}

main {
    width: min(1400px, 90%);
    height: 90%;
    margin-top: 30px;
}


#screen {
    display: grid;
    grid-template-columns: 50% 60%
}

#l-screen {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

}

#r-screen {
  display: flex;
  width: 80%;
  flex-direction: column;
  /* gap: 10px; */
}

label {
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
  resize: none;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

.input-group label {
  width: 48%;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#map-btn {
  background: #3D677A;
  color: white;
}

.button-group {
  display: flex;
  gap: 10px;
}

#create-btn {
  background: #3D677A;
  color: white;
  flex: 1;
}

#cancel-btn {
  background: red;
  color: white;
  flex: 1;
}

h1, h2 {
    width: 100%;
    text-align: left;
    color: #000;
    margin-bottom: 5px;
    font: bolder 1.4rem/1 "Manjari";
}

.label-image, .collum-image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dimgray;
    flex:0 0 350px;
    height: 312px;
}


#collum-pictures {
    flex: 1;
    height: 312px;
    overflow: auto;
}
.collum-image {
    width: 260px;
    height: 220px;
    margin: 0 auto 10px auto;
}

</style>
