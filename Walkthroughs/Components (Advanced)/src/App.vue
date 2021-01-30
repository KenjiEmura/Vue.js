<template>
    <div>
        <TheHeader />
        <BadgeList/>
        <user-info
            v-for="user in activeUser"
            :key="user.id"
            v-bind="user"
        ></user-info>
    </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from './components/BadgeList.vue';

export default {
    components: {
        TheHeader,
        UserInfo,
        BadgeList,
    },
    data() {
        return {
            activeUser: [
                {
                    id: "maximilian",
                    name: "Maximilian Schwarzmüller",
                    description: "Site owner and admin",
                    role: "admin",
                },
                {
                    id: "kenji",
                    name: "Kenji Emura",
                    description: "Un colado que intenta aprender a programar",
                    role: "author",
                },
            ],
        };
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
