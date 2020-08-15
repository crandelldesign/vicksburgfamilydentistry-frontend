<template>
  <div id="vicksburg-family-dentistry">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/style-guide">Style Guide</router-link>
    </div>-->
    <SiteHeader></SiteHeader>
    <SiteNav></SiteNav>
    <router-view/>
    <SiteFooter></SiteFooter>

    <!--<b-modal ref="covid-modal" id="covid-modal-old" hide-footer>
      <template v-slot:modal-title>
        COVID-19 Update
      </template>
      <p>Practice procedures and precautions to keep our patients and our staff safe. Below is a list of questions you should read and answer prior to your appointment:</p>
      <ol>
        <li>Do you have a fever, or have you felt hot or feverish recently (14-21 days)?</li>
        <li>Are you having shortness of breath or other difficulties breathing?</li>
        <li>Do you have a cough?</li>
        <li>Are you experiencing any other flu-like symptoms, such as gastrointestinal upset, headache, or fatigue?</li>
        <li>Have you experienced recent loss of taste or smell?</li>
        <li>Are you in contact with any confirmed COVID-19 positive patients? Patients who are well but who have a sick family member at home with COVID-19 should consider postponing elective treatment.</li>
      </ol>
      <p><small>*Positive responses to any of these would likely indicate a deeper discussion with the dentist before proceeding with dental treatment.</small></p>
    </b-modal>-->

    

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
  data () {
    return {
      isModalReady: false,
    }
  },
  created () {
    AOS.init({
      once: true
    });
    
  },
  mounted () {
    //console.log('hi');
    //this.$bvModal.show('covid-modal');
    document.addEventListener('DOMContentLoaded', () => {
      this.isModalReady = true;
      //this.$refs['covid-modal'].show();
      //this.$bvModal.show('covide-modal-old');
      //console.log(this.$bvModal);
    });
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Vicksburg Family Dentistry'
      if (to.meta.metaTags) {
        let metaTags = to.meta.metaTags;
        metaTags.forEach( metaTag => {
          if (document.querySelector('meta[name="' + metaTag.name + '"]')) {
            const tag = document.querySelector('meta[name="' + metaTag.name + '"]');
            Object.keys(metaTag).forEach(key => {
              tag.setAttribute(key, metaTag[key]);
            });
          } else {
            const tag = document.createElement('meta');
            Object.keys(metaTag).forEach(key => {
              tag.setAttribute(key, metaTag[key]);
            });
            document.head.appendChild(tag);
          }
        });
      }
    }
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
