<template>
  <div>
    <SidebarItem :item="item" :pages="pages" />
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue';
// import myData from '@temp/my-data';

export default {
  name: 'sidebar',
  components: {
    SidebarItem,
  },
  data() {
    return {
      SidebarItem,
    };
  },
  setup() {
    const { results: item } = results;
    return {
      item,
    };
  },
  async created() {},
};
</script>

<style></style>
