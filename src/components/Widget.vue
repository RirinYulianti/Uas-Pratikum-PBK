<template>
    <q-page class="page-center">
      <q-card class="weather-card">
        <q-card-section>
          <div class="text-h6">Widget</div>
        </q-card-section>
  
        <q-card-section>
          <q-input filled v-model="city" label="Masukan Kota" />
          <q-btn label="Get Weather" color="primary" @click="getWeather" />
        </q-card-section>
  
        <q-card-section v-if="weather">
          <div>{{ weather.name }}: {{ weather.main.temp }}°C</div>
          <div>{{ weather.weather[0].description }}</div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const city = ref('')
  const weather = ref(null)
  
  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=cafa6e92f105bddd4a4d17a0bf8a9a7e`)
      weather.value = response.data
    } catch (error) {
      console.error(error)
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+NL:wght@100..400&display=swap');
  
  .page-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .weather-card {
    width: 300px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 10px rgb(93, 223, 246);
  }
  
  .text-h6 {
    font-weight: bold;
    font-family: 'Playwrite NL', cursive;
    font-optical-sizing: auto;
  }
  
  .q-btn {
    margin-top: 10px;
    margin-left: 30px;
  }
  </style>
  