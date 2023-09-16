
import './bootstrap';
import { createApp } from 'vue';

import vuetify from './plugins/vuetify'
import vuex from './plugins/vuex'
import router from './plugins/router'

const app = createApp({});

app.use(vuetify)
app.use(vuex)
app.use(router)



/**
* The following block of code may be used to automatically register your
* Vue components. It will recursively scan this directory for the Vue
* components and automatically register them with their "basename".
*
* Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
*/

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
* Finally, we will attach the application instance to a HTML element with
* an "id" attribute of "app". This element is included with the "auth"
* scaffolding. Otherwise, you will need to add an element yourself.
*/
import App from './App.vue';
app.component('App', App)

import AdminMenu from './layouts/admin_menu.vue'
app.component('AdminMenu', AdminMenu)
/*
const level1 = import.meta.glob('./*.vue')

const app_components = {...level1, ...level2, ...level3}

Object.entries(level2).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')

  // Register component on this Vue instance
  app.component(componentName, definition())
  console.log(componentName, "xxx", definition())
})

//files.forEach()
//files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))
*/


app.mount('#app');
