<template>
  <v-row align="center" >
    <!-- <v-row justify="space-around">
      <v-switch v-model="autorun" class="ma-2" label="Automatic switching"></v-switch>
      <v-switch v-model="showArrows" class="ma-2" label="Show arrows"></v-switch>
      <v-switch v-model="vertical" class="ma-2" label="Vertical"></v-switch>
      <v-switch v-model="reverse" class="ma-2" label="Reverse"></v-switch>
    </v-row> -->

    <v-window
      v-model="window"
      class="elevation-1"
      :vertical="vertical"
      :show-arrows="showArrows"
      :reverse="reverse"
    >
      <v-window-item
      >
        <v-card flat>
          <v-card-text>
            <v-row class="mb-4" align="center">
              <v-avatar class="mr-4"><v-img src="../assets/logo.jpg" max-weight="48px" aspect-ratio="1"></v-img></v-avatar>
              <strong class="title">浙江理工大学校徽</strong>
              <v-spacer></v-spacer>
            </v-row>
            <p>
              浙江理工大学（Zhejiang Sci-Tech University），简称“浙理工”，是一所以工为主，理、工、文、经、管、法、艺术、教育等多学科协调发展的省属重点建设大学。学校坐落于历史文化名城杭州市。入选教育部“卓越工程师教育培养计划“、中国政府奖学金来华留学生接收院校、全国高校实践育人创新创业基地、国家国际科技合作基地、国家级大学生创新创业训练计划、国家级新工科研究与实践项目、浙江省院士专家工作站。具有推荐优秀应届本科毕业生免试攻读硕士学位研究生资格。
            </p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item
      >
        <v-card flat>
          <v-card-text>
            <v-row class="mb-4" align="center">
              <v-avatar class="mr-4"><v-img src="../assets/xlc.png" max-weight="48px" aspect-ratio="1"></v-img></v-avatar>
              <strong class="title">移动应用开发许老师</strong>
              <v-spacer></v-spacer>
            </v-row>
            <p>
              头戴三叉束发紫金冠，体挂西川红棉百花袍，身披兽面吞头连环铠，腰系勒甲玲珑狮蛮带；弓箭随身，手持画戟，坐下嘶风赤兔马。
            </p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <!-- <v-window-item
      >
        <v-card flat>
          <v-card-text>
            <v-row class="mb-4" align="center">
              <v-avatar color="grey" class="mr-4"></v-avatar>
              <strong class="title">Title</strong>
              <v-spacer></v-spacer>
            </v-row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-card-text>
        </v-card>
      </v-window-item> -->
    </v-window>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
      showArrows: false,
      vertical: false,
      reverse: false,
      autorun: false,
    }),

    created () {
      setInterval(() => {
        if (!this.autorun) return
        if (++this.window >= this.length) this.window = 0
      }, 5000)
    },
  }
</script>

<style scoped>
  .row{
    margin: 5px;
  }
</style>