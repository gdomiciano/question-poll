<template>
  <section class="container">
    <div>
      <title />
      <!-- <question> -->
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },

  async fetch ({ store, params }) {
    await store.dispatch('getQuestionDetails', params.id);
  },

  computed: {
    ...mapGetters([
      'currentQuestion',
    ])
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

</style>
