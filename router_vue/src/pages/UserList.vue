<template>
        <h1 class="text-center" style="color: red;">
            User List
        </h1>
        <div class="user-list">
            <div class="user-item">
                <div class="mb-2" v-for="(user , index) in userList" :key="index">
                    <user-item :user="user"></user-item>
                </div>
            </div>
        </div>
</template>
<script>
import UserItem from "../components/UserItem.vue";
import {createNamespacedHelpers} from "vuex";
const {mapState} = createNamespacedHelpers("users");
    export default {
        components:{
            UserItem,
        },
        computed:{
            ...mapState({
                userList: (state) => state.userList,
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .user-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>