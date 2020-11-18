<template>
  <div class="home">
    <SectionIntro></SectionIntro>
    <SectionServices></SectionServices>
    <SectionContactUs></SectionContactUs>
    <SectionAboutUs></SectionAboutUs>
    <hr />
    <SectionForms></SectionForms>

    <div
      class="modal fade"
      id="covid-modal"
      tabindex="-1"
      aria-labelledby="covid-modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="covid-modalLabel">COVID-19 Update</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Practice procedures and precautions to keep our patients and our
              staff safe. Below is a list of questions you should read and
              answer prior to your appointment:
            </p>
            <ol>
              <li>
                Do you have a fever, or have you felt hot or feverish recently
                (14-21 days)?
              </li>
              <li>
                Are you having shortness of breath or other difficulties
                breathing?
              </li>
              <li>Do you have a cough?</li>
              <li>
                Are you experiencing any other flu-like symptoms, such as
                gastrointestinal upset, headache, or fatigue?
              </li>
              <li>Have you experienced recent loss of taste or smell?</li>
              <li>
                Are you in contact with any confirmed COVID-19 positive
                patients? Patients who are well but who have a sick family
                member at home with COVID-19 should consider postponing elective
                treatment.
              </li>
            </ol>
            <p>
              <small
                >*Positive responses to any of these would likely indicate a
                deeper discussion with the dentist before proceeding with dental
                treatment.</small
              >
            </p>
            <p>
              For the time being, our reception area is closed, any patients
              with appointments will be asked to call 269-649-1495 upon their
              arrival.
            </p>
            <p>If you are currently under quarantine for Covid-19 please call us to reschedule.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionIntro from "@/components/SectionIntro.vue";
import SectionServices from "@/components/SectionServices.vue";
import SectionContactUs from "@/components/SectionContactUs.vue";
import SectionAboutUs from "@/components/SectionAboutUs.vue";
import SectionForms from "@/components/SectionForms.vue";
export default {
  name: "Home",
  components: {
    SectionIntro,
    SectionServices,
    SectionContactUs,
    SectionAboutUs,
    SectionForms,
  },
};
</script>
