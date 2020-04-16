<template>
  <div class="home">
    <SectionIntro></SectionIntro>
    <SectionServices></SectionServices>
    <SectionContactUs></SectionContactUs>
    <SectionAboutUs></SectionAboutUs>
    <hr>
    <SectionForms></SectionForms>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionIntro from '@/components/SectionIntro.vue'
import SectionServices from '@/components/SectionServices.vue'
import SectionContactUs from '@/components/SectionContactUs.vue'
import SectionAboutUs from '@/components/SectionAboutUs.vue'
import SectionForms from '@/components/SectionForms.vue'
export default {
  name: 'Home',
  components: {
    SectionIntro,
    SectionServices,
    SectionContactUs,
    SectionAboutUs,
    SectionForms
  }
}
</script>
