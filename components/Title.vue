<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',

  props: {
    page: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      title: this.page,
    };
  },
};
</script>
<style>

</style>
