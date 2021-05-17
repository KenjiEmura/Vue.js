<template>
    <form @submit.prevent="$emit('addUser', name, age)">
        <div>
            <label>Name:</label>
            <input v-model="name" type="text">
        </div>
        <div>
            <label>Age</label>
            <input v-model="age" type="number">
        </div>
        <button>Add new user</button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            name: '',
            age: '',
        }
    },
}
</script>