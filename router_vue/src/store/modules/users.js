const state = function(){
    return{
        userList : [
            {   
                id:1,
                name: "Huy Hoang",
                age: 18,
                typePets:["Dog","Cat"],
            },
            {
                id:2,
                name: "Thanh Hang",
                age:20,
                typePets:["Mouse","Fish"],
            },
        ],
        UserDetail: null,
    };
}

const mutations = {
    setUserDetailMutation(state, payload){
        // const userDetail = state.userList.find((user) => user.id == payload)
        
        // state.UserDetail = userDetail;
        const userDetail = state.userList.find((user) => user.id == payload);
        
        state.userDetail = userDetail;
    },
}

const actions = {
    getUserByIdAction(context, payload){
        context.commit("setUserDetailMutation", payload);
    }
}

export default {
    namespaced : true,
    state, 
    actions,
    mutations
}