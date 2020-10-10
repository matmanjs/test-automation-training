<template>
  <div class="page-home">
    <Navbar />

    <div class="main-wrapper">
      <Banner />
      <AdvantageOne />
      <Community />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Banner from './page-home/Banner';
import AdvantageOne from './page-home/AdvantageOne';
import Community from './page-home/Community';
import Links from './Links';
import Copyright from './Copyright';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Banner,
    Community,
    Links,
    Copyright,
    Footer,
    AdvantageOne,
  },
};
</script>

<style lang="less" scoped>
@import '../styles/content.less';

body {
  background-color: #f9f9f9;
}

.theme-container {
  background-color: #f9f9f9;
}

.main-wrapper {
  flex: 1 0 auto;
  margin-top: 100px;
}
</style>
