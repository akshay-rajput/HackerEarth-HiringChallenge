<template>
    <div class="tab-list container mx-auto px-4 py-4 mb-4">
        <button class="tab p-2 mr-4 text-gray-500 text-xl font-semibold" :class="currentTab == tab ? 'active': ''" @click="currentTab = tab" v-for="tab in tablist" :key="tab">
            {{tab}}
        </button>
    </div>

</template>

<script>
export default {
    props: {
        tablist: Array
    },
    data(){
        return{
            currentTab: 'All'
        }
    },
    watch:{
        currentTab: function(){
            this.$emit("tabChange", this.currentTab);
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab{
        // border: 1px solid #ccc;
        // border-radius: 5px;
        &.active{
            color: #ccc;
        }
        &:hover{
            background: #444;
        }
    }
</style>