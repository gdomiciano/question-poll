<template>
  <section class="container">
    <question-details :details="currentQuestion"/>
  </section>
</template>

<script>
import QuestionDetails from '~/components/QuestionDetails.vue'
import { mapGetters } from 'vuex';

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
  },

};
</script>

<style scoped>

</style>
