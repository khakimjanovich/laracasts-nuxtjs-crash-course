<template>
  <div>
    <h1>This is the main page of the web</h1>
    <Counter/>
    <div>
      x: {{ x }} <br>
      y: {{ y }}
    </div>
  </div>
</template>
<script setup>
const {x, y} = useMouse()
</script>
