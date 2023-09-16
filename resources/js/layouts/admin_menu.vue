<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list density="compact">
            <template v-for="item in items">
                <v-row
                    v-if="item.heading"
                    :key="item.heading"
                    align="center"
                >
                    <v-col cols="6">
                        <template v-if="item.heading">
                        {{ item.heading }}
                        </template>
                    </v-col>
                    <v-col
                        cols="6"
                        class="text-center"
                    >
                        <a
                        href="#!"
                        class="body-2 black--text"
                        >EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group
                    v-else-if="item.children"
                    :key="item.text"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                >
                    <template v-slot:activator>
                        <v-list-item>
                            {{ item.text }}
                        </v-list-item>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        :title="child.text"
                        :prepend-icon="child.icon"
                        link
                    >
                    </v-list-item>
                </v-list-group>

                <v-list-item
                    v-else
                    :key="item.text"
                    link
                    @click="redirect(item.url)"
                    :title="item.text"
                    :prepend-icon="item.icon"
                >
                </v-list-item>
            </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="indigo darken-3"
            density="compact"
            dark
        >
            <v-app-bar-nav-icon @click.stop="$store.commit('app_bar/SET_DRAWER', !drawer)"></v-app-bar-nav-icon>
            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
            >
                <span style="cursor:pointer;" class="">Web App</span>
            </v-toolbar-title>
            <v-text-field
                v-if="false"
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>mdi-bell</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        drawer:{
            get(){
                return this.$store.state.app_bar.drawer
            },
            set(value){
                this.$store.commit('app_bar/SET_DRAWER', value)
            }
        },
        ...mapState({
            items: state => state.navigation_drawer.items
        }),
    },
    methods:{
        redirect(url){
            window.location.href = url
        },
    },
}

</script>
