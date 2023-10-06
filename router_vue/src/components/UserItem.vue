<template>
    <div class="user-item text-center">
        <h3>
            {{ user.name }}
        </h3>
        <p>
            {{ user.age }}
        </p>
        <div class="type-pet">
            <span v-for="(type, index) in user.typePets" :key="index" 
            class="badge badge-secondary ml-2"
            >
            {{ type }}
            </span>
        </div>
        <div class="text-center mt-2">
            <button @click="handleClickGoToDetail" class="btn btn-info">
                Go to detail
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        user : {
            type : Object,

        },
    },
    methods:{
        handleClickGoToDetail(){
            this.$router.push(
                {
                    name: "user-detail",
                    params:{
                        userId : this.user.id,
                    },
                }
            );
        },
    }
}
</script>

<style lang="scss" scoped>
    .user-item{
        max-width: 500px;
        padding: 20px;
        border: 2px solid blue;
        border-radius: 22px ;
    }
</style>