<template>
    <div>
        <h1 class="text-center text-primary">
            Pet List
        </h1>
        <div class="pet-list row">
            <div class="col-lg-4 mb-2" v-for="(pet , index) in petList" :key="index">
                <pet-item :pet="pet"></pet-item>
            </div>
        </div>
    </div>
</template>

<script>
    import PetItem from "../components/PetItem.vue";
    import { createNamespacedHelpers } from 'vuex';
    const {mapState} = createNamespacedHelpers("pets");
    export default {
        components:{
            PetItem,
        },
        computed:{
            ...mapState({
                petList: (state) => state.petList,
            })
        }
    }
</script>

<style lang="scss" scoped>
    h1{ 
        color: red;
    }
</style>