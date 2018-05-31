<template>
  <div class="question-details">
    <h1 class="title">Question Details</h1>
    <h3>{{ questionName }}</h3>
    <div class="choices-list">
      <choice-item
        v-for="choice in choices"
        :key="choice.id"
        :answer="question.choices"
        :percentage="calcPercentage(choice.votes, totalVotes)"
        :votes="choice.votes" />
    </div>
  </div>
</template>

<script>
import ChoiceItem from '~/components/ChoiceItem.vue';

export default {
  name: 'QuestionDetails',

  components: {
    ChoiceItem
  },

  props: {
    details: {
      type: Object,
      required:true,
    },
  },

  data () {
    return {
      questionName: this.details.question,
      choices: this.details.choices,
      totalVotes: this.details.totalVotes,
    };
  },
};
</script>

<style scoped>

</style>
