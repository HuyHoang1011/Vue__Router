import UserList from './pages/UserList.vue';
import PetList from './pages/PetList.vue';
import UserDetail from './pages/UserDetail.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter , createWebHistory} from 'vue-router';

const routes = [
    // {path : "/" , redirect:"/users"},
    {
        path: '/users', 
        component: UserList, 
        name: "user-list",
        alias : "/",
    },
    {
        path: '/pets', 
    component:PetList
    },
    {
        path: "/user-detail/:userId",
        name : "user-detail",
        component:UserDetail, 
    },
    { 
        path: '/:pathMatch(.*)*', 
        // name: 'NotFound', 
        component: NotFound 
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes, 
    linkActiveClass : "active"
});

export default router;