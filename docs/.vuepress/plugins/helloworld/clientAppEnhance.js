import { defineClientAppEnhance } from '@vuepress/client';
import Sidebar from './Sidebar.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Sidebar', Sidebar);
});
