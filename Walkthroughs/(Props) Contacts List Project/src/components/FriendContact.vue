<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : "Show Details" }}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete-friend', id)">Delete</button>
    </li>
</template>

<script>
export default {
    // For props and emits validation, we have to use an object instead of an array

    // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
    // Handling events validation:
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            default: "NO NAME PASSED",
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false, // A function can be used here...
            // validator: value => {
            //     return value === true || value === false
            // }
        },
    },

    // emits: ["toggle-favorite"],
    // Handling events validation:
    emits: {
        "toggle-favorite": (id) => {
            if (id) {
                return true;
            } else {
                console.warn("ID is missing");
                return false;
            }
        },
        "delete-friend": (id) => {
            if (id) {
                return true;
            } else {
                console.warn("ID is missing");
                return false;
            }
        },
    },

    data() {
        return {
            detailsAreVisible: false,
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit("toggle-favorite", this.id);
        },
    },
};
</script>
