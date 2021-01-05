<template>
  <section class="section contact-us" id="contact-us">
    <div class="content">
      <h2>Contact Us</h2>
    </div>
    <div class="google-map" id="map"></div>
    <div class="content">
      <div class="row" itemscope itemtype="https://schema.org/Dentist">
        <div
          class="col-xl-6 col-lg-8 offset-lg-2 offset-xl-0 mb-4"
          id="contact-form"
        >
          <div class="card" data-aos="zoom-in">
            <h3 class="card-header">Send Us a Message</h3>
            <div class="card-body">
              <div
                class="alert"
                role="alert"
                v-if="alert.show"
                :class="'alert-' + alert.status"
              >
                {{ alert.message }}
              </div>

              <!--<ValidationObserver ref="contactUsForm" v-slot="{ reset }" tag="div">-->
              <ValidationObserver ref="contactUsForm" tag="div">
                <form
                  id="contact-us-form"
                  method="post"
                  v-on:submit.prevent="submitForm($event)"
                >
                  <ValidationProvider
                    class="form-group"
                    rules="required"
                    name="name"
                    v-slot="{ valid, errors }"
                    tag="div"
                  >
                    <label class="sr-only" for="contactname">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="contactname"
                      name="contactname"
                      v-model="contactname"
                      v-bind:class="{ 'is-invalid': errors[0] }"
                      placeholder="Enter Your Name"
                    />
                    <div class="invalid-feedback">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <div class="form-row">
                    <ValidationProvider
                      class="col-md-6 form-group"
                      rules="required|email"
                      name="email address"
                      v-slot="{ valid, errors }"
                      tag="div"
                    >
                      <label class="sr-only" for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="email"
                        v-bind:class="{ 'is-invalid': errors[0] }"
                        placeholder="Enter Email Address"
                      />
                      <div class="invalid-feedback">{{ errors[0] }}</div>
                    </ValidationProvider>
                    <ValidationProvider
                      class="col-md-6 form-group"
                      rules="required"
                      name="phone number"
                      v-slot="{ valid, errors }"
                      tag="div"
                    >
                      <label class="sr-only" for="email">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        v-model="phone"
                        v-bind:class="{ 'is-invalid': errors[0] }"
                        placeholder="Enter Phone Number"
                      />
                      <div class="invalid-feedback">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <ValidationProvider
                    class="form-group"
                    rules="required"
                    name="message"
                    v-slot="{ valid, errors }"
                    tag="div"
                  >
                    <label class="sr-only" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="6"
                      cols="120"
                      v-model="message"
                      v-bind:class="{ 'is-invalid': errors[0] }"
                      placeholder="Enter Message"
                    ></textarea>
                    <div class="invalid-feedback">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <vue-recaptcha
                    ref="recaptcha"
                    @verify="onCaptchaVerified"
                    @expired="resetCaptcha"
                    size="invisible"
                    :sitekey="sitekey"
                    :loadRecaptchaScript="true"
                  >
                  </vue-recaptcha>
                  <div class="form-group">
                    <small class="form-text">
                      This site is protected by reCAPTCHA and the Google
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        >Privacy Policy</a
                      >
                      and
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        >Terms of Service</a
                      >
                      apply.
                    </small>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      :disabled="isLoading"
                      v-cloak
                    >
                      <transition name="slide-fade" mode="out-in">
                        <span :key="submitText">{{ submitText }}</span>
                      </transition>
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3 mb-4">
          <div class="card" data-aos="zoom-in">
            <h3 class="card-header">Contact Information</h3>
            <div class="card-body">
              <div>
                <h4><span itemprop="name">Vicksburg Family Dentistry</span></h4>
                <address
                  itemprop="address"
                  itemscope
                  itemtype="https://schema.org/PostalAddress"
                >
                  <span itemprop="streetAddress">602 West Prairie Street</span
                  ><br />
                  <span itemprop="addressLocality">Vicksburg</span>,
                  <span itemprop="addressRegion">MI</span>
                  <span itemprop="postalCode">49097</span>
                </address>
                <p>
                  <a href="tel:12696491495"
                    ><span itemprop="telephone">269-649-1495</span></a
                  >
                </p>
                <p>
                  <a href="mailto:vicksburgfamilydentistry@gmail.com"
                    ><span itemprop="email"
                      >vicksburgfamilydentistry@gmail.com</span
                    ></a
                  >
                </p>
                <p>
                  <a
                    href="https://maps.google.com/?cid=15946836643540095399"
                    itemprop="maps"
                    >View on Google Maps</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3 mb-4">
          <div class="card" data-aos="zoom-in">
            <h3 class="card-header">Hours</h3>
            <div class="card-body">
              <table class="table hours-table">
                <tbody>
                  <tr>
                    <th>Monday</th>
                    <td>
                      <time itemprop="openingHours" content="Mo 8:00-17:00"
                        >8:00am - 5:00pm</time
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <td>
                      <time itemprop="openingHours" content="Tu 8:00-17:00"
                        >8:00am - 5:00pm</time
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <td>
                      <time itemprop="openingHours" content="We 8:00-17:00"
                        >8:00am - 5:00pm</time
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <td>
                      <time itemprop="openingHours" content="Th 8:00-17:00"
                        >8:00am - 5:00pm</time
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Friday</th>
                    <td>
                      <time itemprop="openingHours" content="Mo 8:00-14:00"
                        >8:00am - 2:00pm</time
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import VueRecaptcha from "vue-recaptcha";
import axios from "axios";
const google = window.google;
extend("email", {
  ...email,
  message: "Please enter a valid email.",
});
// Override the default message.
extend("required", {
  ...required,
  message: "Please enter a {_field_}.",
});
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    VueRecaptcha,
  },
  data() {
    return {
      mapName: "map",
      map: null,
      // contact data
      isLoading: false,
      alert: {
        show: false,
        status: "",
        message: "",
      },
      contactname: "",
      email: "",
      phone: "",
      message: "",
      submitText: "Send Message",
      sitekey: "6LcTmOgUAAAAALWSvkyqKH89luEqfoJWPZEef4--",
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.initMap();
      }
    };
  },
  methods: {
    // Map
    initMap() {
      var location = { lat: 42.121768, lng: -85.542446 };
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#444444",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 45,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#46bcec",
              },
              {
                visibility: "on",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#009eff",
              },
            ],
          },
        ],
      });
      var service = new google.maps.places.PlacesService(this.map);
      let map;
      service.getDetails(
        {
          placeId: "ChIJPYHXP72hF4gRp9Fj9W-LTt0",
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            let infowindow = null;
            const marker = new google.maps.Marker({
              position: place.geometry.location,
              map: this.map,
            });
            google.maps.event.addListener(marker, "click", function () {
              infowindow = new google.maps.InfoWindow();
              infowindow.setContent(
                "<div><strong>" +
                  place.name +
                  "</strong><br>" +
                  place.formatted_address +
                  "<br>" +
                  '<a href="' +
                  place.url +
                  '" target="_blank">View on Google Maps</a>' +
                  "</div>"
              );
              infowindow.open(map, this);
            });
          }
        }
      );
    },
    googleMapsFailedToLoad() {
      //console.log('fail');
    },
    // Contact Us Form
    submitForm() {
      this.error_message = "";
      this.isSubmitting = true;
      this.$refs.recaptcha.execute();
    },
    async onCaptchaVerified(token) {
      //this.resetCaptcha();
      this.alert.show = false;
      const isValid = await this.$refs.contactUsForm.validate();
      //console.log(isValid);
      if (isValid) {
        this.loading = true;
        this.submitText = "Sending...";
        axios
          .post("/api/contact", {
            contactname: this.contactname,
            email: this.email,
            phone: this.phone,
            message: this.message,
            token: token,
          })
          .then(() => {
            //console.log(response);
            // Validation Success
            this.isLoading = false;
            this.alert.show = true;
            this.alert.status = "success";
            this.alert.message = `Thanks for your e-mail! We'll get back to you as soon as we can.`;
            this.submitText = "Send Message";
            this.reset();
          })
          .catch(() => {
            this.isLoading = false;
            this.alert.show = true;
            this.alert.status = "danger";
            this.alert.message =
              "Your message was not received. Please try again.";
            this.submitText = "Send Message";
            //console.log(e);
          });
      } else {
        // Validation Failed
        this.alert.show = true;
        this.alert.status = "danger";
        this.alert.message = "Please correct the errors in red on the form.";
      }
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
      this.g_recaptcha_response = "";
    },
    reset() {
      this.contactname = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      // Wait until the models are updated in the UI
      this.$nextTick(() => {
        this.$refs.contactUsForm.reset();
      });
    },
    resetCaptcha() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>