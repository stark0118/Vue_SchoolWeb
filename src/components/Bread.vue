<template>
  <div>
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: '首页',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: '推荐新闻',
          disabled: false,
        //   href: 'breadcrumbs_link_1',
          to: {path:'/news',query:{type:'__all__'}}
        },
      ],
    }),
  }
</script>