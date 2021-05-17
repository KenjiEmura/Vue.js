<template>
    <div>
        <TheHeader />
        <BadgeList/>
        <user-info
            v-for="user in activeUser"
            :key="user.id"
            v-bind="user"
        ></user-info>
        <!-- <course-goals>
          <template #default="slotProps">
            <h2 @click="console(slotProps)">{{ slotProps.item }}</h2>
            <p>{{ slotProps.anotherProp }}</p>
          </template>
        </course-goals> -->
        <course-goals #default="slotProps">
            <h2 @click="console(slotProps)">{{ slotProps.item }}</h2>
            <p>{{ slotProps.anotherProp }}</p>
        </course-goals>
    </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
    components: {
        TheHeader,
        UserInfo,
        BadgeList,
        CourseGoals,
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
                // {
                //     id: "kenji",
                //     name: "Kenji Emura",
                //     description: "Un colado que intenta aprender a programar",
                //     role: "author",
                // },
            ],
        };
    },
    methods: {
      console(value) {
        console.log(value)
      }
    }
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
