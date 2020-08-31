<template>
  <div>
    <router-link id="navlink" to="/interests" active>
      <button
        class="bg-transparent hover:bg-indigo-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
      >interests</button>
    </router-link>
    <router-link id="navlink" to="/contact">
      <button
        class="bg-transparent hover:bg-indigo-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
      >hello</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
#navlink {
  font-size: 20px;
  margin: 30px;
}
</style>