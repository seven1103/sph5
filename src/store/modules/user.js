const user = {
    state:{
        id:'',
        name:'seven',
        sex:1,
        avater:''
    },
    mutations:{
        SET_ID: (state, id) => {
            state.id = id
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATER: (state, avater) => {
            state.avater = avater
        }
    },
    actions:{
        // 获取用户信息
        GetUserInfo({ commit }, userInfo){
            commit('SET_ID', userInfo.userid)
            commit('SET_NAME', userInfo.nickname)
            commit('SET_AVATER', userInfo.avater)
        },
        ClearUserInfo({ commit }){
            commit('SET_ID', '')
            commit('SET_NAME', '')
            commit('SET_AVATER', '')
        }
    }
}

export default user