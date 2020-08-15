<template>
  <div class="home">
    <SectionIntro></SectionIntro>
    <SectionServices></SectionServices>
    <SectionContactUs></SectionContactUs>
    <SectionAboutUs></SectionAboutUs>
    <hr>
    <SectionForms></SectionForms>

    <div class="modal fade" id="covid-modal" tabindex="-1" aria-labelledby="covid-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="covid-modalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
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
