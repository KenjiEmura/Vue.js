<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h3>{{ name }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ description }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["name", "description", "role"],
};
</script>
 
<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
