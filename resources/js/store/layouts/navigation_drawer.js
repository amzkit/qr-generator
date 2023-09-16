const state = {
    items: [
        { icon: 'mdi-account', text: 'หน้าแรก', url: '/' },
        { icon: 'mdi-account', text: 'แดชบอร์ด', url: '/dashboard' },
        { icon: 'mdi-logout', text: 'ออกจากระบบ', url: '/logout' },
    ],
}

const getters = {}
const actions = {}
const mutations = {}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
