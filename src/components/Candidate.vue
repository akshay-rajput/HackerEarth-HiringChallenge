<template>
  <div class="container mx-auto px-4 text-white">
      <h3 class="text-xl font-semibold py-2 mb-4">Candidate Information</h3>
      <div class="user-card flex rounded text-gray-300 bg-gray-700 border border-gray-500 mb-4 shadow" >
        <div class="user-image p-2">
            <img :src="view_user_info.image" alt="Candidate Image" class="h-24">
        </div>
        <div class="user-info p-2">
            <h3 class="text-lg font-semibold mb-1">{{view_user_info.name}}</h3>
            <h4 class="text-sm text-gray-400">User Id : {{viewing_user_id}}</h4>
            <h4 class="text-sm mt-4 px-2 py-1 rounded bg-red-700 text-red-200" v-if="view_user_info.rejected">Candidate has been Rejected</h4>

            <button v-if="!view_user_info.rejected" class="px-2 py-1 sm:mr-8 rounded bg-blue-700 hover:bg-green-700 mt-4 text-sm" @click="toggleShortlist(view_user_info)">
                <span class="" v-if="!view_user_info.shortlisted">Add to Shortlist</span>
                <span v-if="view_user_info.shortlisted">Remove from Shortlist</span>
            </button>

            <button v-if="!view_user_info.rejected" class="px-2 py-1 rounded bg-red-300 text-red-900 mt-4 text-sm" @click="reject(view_user_info)">
                Reject Candidate
            </button>
            <!-- <router-link :to="{ name: 'Candidate', params: { id: candidate.id }}">View</router-link> -->
        </div>
        </div>
  </div>
</template>

<script>
export default {
    
    computed: {
        viewing_user_id(){
            return this.$route.params.id;
        },
        view_user_info(){
            var user_info = {};
            var full_list = this.$store.getters.getter_candidateList;
            console.log("full list: ", full_list);
            full_list.forEach(user => {
                if(user.id == this.viewing_user_id){
                    user_info.id = user.id;
                    user_info.name = user.name;
                    user_info.image = user.Image;
                    user_info.shortlisted = user.shortlisted;
                    user_info.rejected = user.rejected;
                }
            });
            return user_info;
        }
    },
    methods: {
        toggleShortlist(user_info){
            console.log("toggle shortlise: ", user_info);
            if(user_info.shortlisted == false){
                this.$store.dispatch('action_addToShortlist', user_info);
            }
            else{
                this.$store.dispatch('action_removeFromShortlist', user_info);
            }
        },
        reject(user_info){
            console.log("rejecting");
            this.$store.dispatch('action_rejectCandidate', user_info);
        }

    }
}
</script>

<style>

</style>