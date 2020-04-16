<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/style-guide">Style Guide</router-link>
    </div>-->
    <SiteHeader></SiteHeader>
    <SiteNav></SiteNav>
    <router-view/>
    <SiteFooter></SiteFooter>
  </div>
</template>
<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import AOS from 'aos'
export default {
  components: {
    SiteHeader,
    SiteNav,
    SiteFooter
  },
  created () {
    AOS.init({
      once: true
    });
  }
}
</script>
<style lang="scss">
@import './sass/variables';
@import './sass/mixins';
@import '~bootstrap/scss/bootstrap';
@import '~aos/src/sass/aos';
@import './sass/global';
@import './sass/buttons';
@import './sass/header';
@import './sass/footer';
@import './sass/color-swatches';
@import './sass/sections';
@import './sass/pages/style-guide';
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
