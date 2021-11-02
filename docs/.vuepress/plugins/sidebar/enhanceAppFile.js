import Sidebar from './Sidebar.vue';

export default ({ Vue, siteData }) => {
  const docs = siteData.themeConfig.docs;
  console.log(siteData);
  Vue.component('Sidebar', {
    name: 'sidebar',
    functional: true,
    render() {
      return <Sidebar pages={siteData.pages} item={docs} />;
    },
  });
};
