<template>
  <div class="home">
    <!-- <div>
      <a href="http://www.zstu.edu.cn/">
        <img src="@/assets/logozuzhan1.jpg" alt="">
      </a>
    </div> -->
    
    <Carousels/>
    <!-- <h1>This is Home Page</h1> -->
    <Windows/>
    <Weather/>

  </div>
</template>

<script>
import Carousels from '@/components/Carousels.vue'
import Windows from '@/components/Windows.vue'
import Weather from '@/components/Weather.vue'
export default {
  components: {
    Carousels,
    Windows,
    Weather
  },
} 
</script>
