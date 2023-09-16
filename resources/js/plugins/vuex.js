import { createStore } from 'vuex'

import app_bar from '../store/layouts/app_bar'
import navigation_drawer from '../store/layouts/navigation_drawer'

export default new createStore({
    modules: {
        app_bar,
        navigation_drawer,
    },
})
