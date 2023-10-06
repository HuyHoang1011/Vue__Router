<template>
    <div>
        <h1>Detail User</h1>
        <p>
            {{ $route.params.userId }}
        </p>
        <div class="row">
            <div class="col-sm-5">
                <img class="img-thumbnail" src="https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125_640.jpg" alt="...">
            </div>
            <div class="col-sm-7">
                <h3>
                    Name: 
                    <span class="badge badge-info">
                        {{ userDetail.name }}
                    </span>
                </h3>
                <h3>
                    Age: 
                    <span class="badge badge-info">
                        {{ userDetail.age }}
                    </span>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
    computed:{
        ...mapState({
            userDetail : (state) => state.userDetail,
        }),
    },
    methods:{
        ...mapActions({
            getUserById: 'getUserByIdAction',
        }),
    },
    created() {
        console.log(this.$route.params.userId);
        this.getUserById(this.$route.params.userId);
    }, 
};
</script>

<style lang="scss" scoped></style>