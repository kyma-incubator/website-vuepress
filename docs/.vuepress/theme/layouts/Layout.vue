<template>
  <div class="theme-container">
    <Header />
    <main class="flex m-auto container">
      <div class="xl:w-1/5 px-3 w-0">
        <div class="custom-sidebar">
          <Sidebar />
        </div>
      </div>
      <div class="xl:w-3/5 px-3 lg:w-4/5 w-full main-content overflow-x-auto">
        <h1>{{ $page.frontmatter.title }}</h1>
        <Content />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const { children, name } = results.results;
    return {
      children,
      name,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/index.scss';
h1 {
  font-size: 20px;
  font-weight: bold;
}
main {
  min-height: 80vh;
}
.theme-container {
  min-height: 100vh;
}
</style>
