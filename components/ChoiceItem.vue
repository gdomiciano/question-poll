<template>
      <li
        v-for="choice in choices"
        :key="choice.id"
        :answer="question.choices"
        :percentage="calcPercentage(choice.votes, totalVotes)"
        :votes="choice.votes" >
    </li>
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
