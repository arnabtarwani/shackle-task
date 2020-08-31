<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Interests</h1>
          <p
            class="lg:w-2/3 mx-auto leading-relaxed text-base"
          >Showcasing some Interests fetched from Shackle API!</p>
        </div>

        <div v-for="data in interestData" :key="data.id">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  :src="data.image"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">{{ data.interest_name}}</h2>
                  <p class="text-gray-500">{{ data.interest_tag.replace("_and_", " and ")}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Interests",
  data() {
    return {
      loading: false,
      interestData: null,
    };
  },
  async created() {
    this.loading = true;
    try {
      const res = await axios.get("/api/interests");
      this.interestData = res.data;
      console.log(this.interestData);
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log(error);
      // this.error = error.response.data.message;
    }
  },
};
</script>

<style>
</style>