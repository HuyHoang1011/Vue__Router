<template>
    <div class="card" style="witdh: 18rem">
        <img class="card-img-top" :src="pet.img" alt="...">
        <div class="body">
            <h5 class="card-tittle">
                {{ pet.name }}
            </h5>
            <span class="badge badge-secondary">
                {{ pet.type }}
            </span>
            <p class="card-text">
                {{ pet.description }}
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        props:{
            pet:{
                type: Object,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .card{
        width: 80%;
        margin: auto;    
        padding: 5px;
    }
</style>