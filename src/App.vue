<template>
  <v-app>
    <Appbar/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Toolbar/>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import Appbar from '@/components/Appbar.vue'
export default {
  name: 'App',

  components: {
    Toolbar,
    Appbar
  },

  data: () => ({
    //
  }),
};
</script>
