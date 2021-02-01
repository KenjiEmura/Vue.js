<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="This is the other prop"></slot>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      goals: ['Finish the couse', 'Learn Vue']
    }
  }
}
</script>