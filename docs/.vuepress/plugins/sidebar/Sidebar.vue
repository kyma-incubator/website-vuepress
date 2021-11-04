<template>
  <h1>hi</h1>
</template>

<script>
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'sidebar',
  components: {
    SidebarItem,
  },
  props: {
    router: Object,
  },
  setup(props) {
    // console.log(props.router);
    // console.log(props.router.getRoutes());
    const array = ['html', '.md'];
    const routes = props.router.getRoutes().filter(route => !/(html|md)$/.test(route.path));
    console.log(routes);
    return {
      SidebarItem,
    };
  },
};
</script>

<style></style>
