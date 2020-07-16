<template>
  <v-carousel 
    cycle
    height="300"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          
          {
            src: 'http://www.zstu.edu.cn/images/21591445304_.pic.jpg',
          },
          {
            src: 'http://www.zstu.edu.cn/images/31591445316_.pic_hd.jpg',
          },
          {
            src: 'http://www.zstu.edu.cn/images/25lou.jpg',
          },
          {
            src: 'http://www.zstu.edu.cn/images/gd.jpg',
          },
        ],
      }
    },
  }
</script>