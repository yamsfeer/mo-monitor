<script setup>
import { ref, reactive } from 'vue'
import { onFCP } from '../packages/performance'

let text = ref('before')
onFCP(metric => text.value = metric.name)

</script>
<template>
  <div class="container">
    <div class="observer">
      <h1>FCP</h1>
      <p>{{ text }}</p>
    </div>
    <div class="observer">
      <h1>INP</h1>
      <button class="action">触发 INP</button>
      <!-- <img src="https://raw.githubusercontent.com/yamsfeer/pic-bed/master/INP.svg" alt="INP"> -->
    </div>
  </div>
</template>
<style>
.container {
  padding: 0 16px;
}

.observer {
  margin-bottom: 16px;
  padding: 0 16px;
  border: 1px solid black;
}

.action {
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  width: 400px;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: deepskyblue;
  text-align: center;
  transition: all ease .2s;
}

.action:hover {
  color: white;
}
</style>
