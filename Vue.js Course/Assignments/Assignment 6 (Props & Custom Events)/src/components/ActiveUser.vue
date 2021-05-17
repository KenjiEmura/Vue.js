<template>
    <li>
        <h2>{{ name }}</h2>
        <h3>Age: {{ age }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            required: true,
        },
    },
};
</script>

