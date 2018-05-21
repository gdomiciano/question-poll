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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.questions-summary-list {
  width: 100%;
}
</style>
