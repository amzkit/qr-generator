<template>
    <v-app id="inspire">
        <v-main>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="form" id="form" method="POST" action="/login">
                    <v-text-field v-model="email" prepend-icon="person" name="login" label="อีเมล์" type="text"></v-text-field>
                    <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="รหัสผ่าน" type="password"></v-text-field>
                    <v-text-field v-model="csrf" name="_token" :value="csrf"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit" form="form">เข้าสู่ระบบ</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
        </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            //csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            csrf: document.head.querySelector('meta[name="csrf-token"]').content,
            email: "",
            password: "",
        }),
        props: {
            source: String
        },
        methods: {
            onSubmit(){
                document.getElementById("form").submit()
            }
        }
    }
</script>
