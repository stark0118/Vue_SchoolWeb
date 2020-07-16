<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <!-- <p>weather info:{{info}}</p> -->
        <v-list-item-title class="headline">“这里”温度</v-list-item-title>
        <v-list-item-subtitle>{{info[0].date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{info[0].tmp.max}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
      <v-list-item
        v-for="item in info"
        :key="item.date"
      >
        <v-list-item-title>{{ item.date }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>mdi-white-balance-sunny</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.tmp.min }}-{{item.tmp.max}}&deg;C
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Full Report</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 2,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
        info:'null'
      }
    },
    mounted () {
    axios
      .get('http://bird.ioliu.cn/v1/?url=https://way.jd.com/he/freeweather?city=hangzhou&appkey=3aca73f301359e8b11343f085e8ea4f0')
      .then(response => (this.info = response.data.result.HeWeather5[0].daily_forecast))
    },
  }
</script>