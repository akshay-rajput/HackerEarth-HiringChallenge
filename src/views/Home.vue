<template>
  <div class="home mb-12">
    <list-options-tabs @tabChange = "activeTab" :tablist = tabs></list-options-tabs>
    <ListOfCandidates :allCandidates = all_candidates />
  </div>
</template>

<script>
// @ is an alias to /src
import ListOptionsTabs from '@/components/ListOptionsTabs.vue'
import ListOfCandidates from '@/components/ListOfCandidates.vue'

export default {
  name: 'Home',
  data(){
    return{
      tabs: [
        'All', 
        'Shortlisted',
        'Rejected'
      ],
      currentTab: 'All'
    }
  },
  components: {
    ListOfCandidates,
    ListOptionsTabs
  },
  mounted(){
    this.$store.dispatch('action_fetchCandidates');  
  },
  computed: {
    all_candidates(){
      var list = this.$store.getters.getter_candidateList;
      
      if(this.currentTab == "Shortlisted"){
        var shortlist = list.filter(item => {
          return item.shortlisted == true;
        })
        return shortlist;  
      }
      else if(this.currentTab == "Rejected"){
        var rejectedList = list.filter(item => {
          return item.rejected == true;
        })
        return rejectedList;  
      }
      return this.$store.getters.getter_candidateList;
    }
  },
  methods: {
    activeTab: function(tabName){
      this.currentTab = tabName;
      console.log("tab change", this.currentTab);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>