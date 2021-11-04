<template>
  <Header />
  <main><Content /></main>
  <Footer />
</template>

<script>
import Header from './Header/Header.vue';
import Footer from './Footer/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
main {
  height: 1000px;
}
</style>
