<template>
  <div>
    <v-app-bar
      color="white accent-4"
      dense
      dark
      flat
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <v-toolbar-title>浙江理工大学</v-toolbar-title> -->
      <div>
      <a href="http://www.zstu.edu.cn/">
        <img src="@/assets/logozuzhan1.jpg" alt="">
      </a>
      </div>
      <v-spacer></v-spacer>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="white green--text"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>