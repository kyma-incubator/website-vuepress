<template>
  <SidebarItem :pages="pages" :item="item" />
  <h1>hi</h1>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
  name: 'sidebar',
  components: {
    SidebarItem,
  },
  props: {
    item: Object,
    pages: Array,
  },
  data() {
    return {};
  },
  setup(){
    console.log(props.item)
  },
  computed: {},
  created() {},
  destroyed() {},
  methods: {},
};
</script>

<style></style>
