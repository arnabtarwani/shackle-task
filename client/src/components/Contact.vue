<template>
  <div>
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore Shackle</h1>
          <h2 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h2>
          <p
            class="lg:w-2/3 mx-auto leading-relaxed text-base"
          >Trying to create something beautiful in a short amount of time.</p>
        </div>
        <form v-on:submit.prevent="onSubmit">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <input
                  class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="First Name"
                  type="text"
                  v-model="firstName"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Last Name"
                  type="text"
                  v-model="lastName"
                />
              </div>
              <div class="p-2 w-full">
                <input
                  class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Email"
                  type="email"
                  v-model="email"
                />
              </div>
              <div class="p-2 w-full">
                <textarea
                  class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                  placeholder="Message"
                  v-model="subject"
                ></textarea>
              </div>
              <div class="p-2 w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      loading: true,
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      this.$toasted.show("submitting", {
        duration: 1000,
        icon: "exclamation-circle",
      });

      try {
        const res = await axios
          .post("/api/contact", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            subject: this.subject,
          })
          .then((res) => {
            if (res) {
              this.$toasted.show("Your form is submitted!", {
                duration: 3000,
                icon: "check-circle",
              });
              this.loading = false;
            }
          });
        console.log(res);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>