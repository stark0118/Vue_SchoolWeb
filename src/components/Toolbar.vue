<template>
  <v-bottom-navigation 
    :class="nav"
    :value="activeBtn"
    fixed
    grow
    color="green"
  >
    <v-btn @click="Home" >
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="News">
      <span>News</span>
      <v-icon>mdi-forum</v-icon>
    </v-btn>

    <v-btn @click="Music">
      <span>application</span>
      <v-icon>mdi-application</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 0,
      }
    },
    methods: {
      Home(){
      this.$router.push({  //�������
        path:'/',   //��ת��·��
        query:{           //·�ɴ���ʱpush��query����ʹ�� ������ʱ���ݲ���
          // id:this.id , 
        }
      })
      },
      Music(){
        this.$router.push({  //�������
        path:'/application',   //��ת��·��
        query:{           //·�ɴ���ʱpush��query����ʹ�� ������ʱ���ݲ���
          // id:this.id , 
        }
      })
      },
      News(){
        this.$router.push({
          path:'/news',
          query:{

          }
        })
      }
    }
  }
</script>
<style scoped>
  .v-btn:not(.v-btn--round).v-size--default{
    height: auto;
  }
</style>
