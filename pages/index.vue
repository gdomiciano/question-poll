<template>
  <section class="container">
    <title :page="title" />
    <div class="questions-summary-list">
      <question-summary-item
        v-for="question in questionsSummary"
        :key="question.id"
        :url="question.url"
        :choices="question.totalChoices"
        :date="question.publishDate"
        :question="question.questionName" />
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue';
import QuestionSummaryItem from '~/components/QuestionSummaryItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Title,
    QuestionSummaryItem,
  },

  data () {
    return {
      title: 'Questions',
    };
  },

  async fetch ({ store, params }) {
    await store.dispatch('getQuestions');
  },

  computed: {
    ...mapGetters([
      'questionsSummary',
    ]),
  },
};
</script>

<style scoped>


.questions-summary-list {
  width: 100%;
}
</style>
