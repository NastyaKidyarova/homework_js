<script setup>
import { reactive } from 'vue'

let speed = reactive({
  kmh: '',
  ms: ''
})

function changeKmh() {
  let number = Number(speed.kmh)

  if (speed.kmh === '') {
    speed.ms = ''
  } else if (!isNaN(number)) {
    speed.ms = (number / 3.6).toFixed(2)
  }
}

function changeMs() {
  let number = Number(speed.ms)

  if (speed.ms === '') {
    speed.kmh = ''
  } else if (!isNaN(number)) {
    speed.kmh = (number * 3.6).toFixed(2)
  }
}
</script>

<template>
  <div class="page">
    <h1>Конвертер скорости</h1>

    <div class="form">
      <label for="kmh">Км/ч</label>
      <input id="kmh" type="text" v-model="speed.kmh" @input="changeKmh">

      <label for="ms">М/с</label>
      <input id="ms" type="text" v-model="speed.ms" @input="changeMs">
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 400px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 28px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border: 1px solid #dddddd;
}

input {
  padding: 10px;
  font-size: 16px;
}
</style>
