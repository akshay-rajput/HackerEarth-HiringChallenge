<template>
  <div class="container mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    <div class="user-card flex rounded text-gray-300 bg-gray-700 border border-gray-500 mb-4 shadow" v-for="candidate in allCandidates" :key="candidate.id">
      <div class="user-image p-2">
        <img :src="candidate.Image" alt="Candidate Image" class="h-24">
      </div>
      <div class="user-info p-2">
        <h3 class="font-semibold my-1">{{candidate.name}}</h3>
        <h4 class="text-gray-400 text-sm mb-4">Id: {{candidate.id}}</h4>
        <router-link class="text-blue-500 hover:text-green-600" :to="{ name: 'Candidate', params: { id: candidate.id }}">View Candidate</router-link>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ListOfCandidates',
  props: {
    allCandidates: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
