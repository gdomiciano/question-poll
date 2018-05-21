<template>
  <nuxt-link
    :to="{ path: questionLink}"
    tag="div"
    class="questions-summary-link question-summary-item">
    <h3 class="question-name">{{ questionName }}</h3>
    <p class="publish-date">{{ publishDate }}</p>
    <p class="total-choices">{{ totalChoices }} choices</p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'QuestionSummaryItem',

  props: {
    url: {
      type: String,
      required:true,
    },
    question: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    choices: {
      type: Number,
      required: true,
    },
  },

  data () {
    return {
      totalChoices: this.choices,
      publishDate: this.date,
      questionName: this.question,
      questionLink: this.url,
    };
  },
};
</script>

<style>
.question-summary-item {
  border: 1px solid #35495e;
  border-radius: 5px;
  color: #35495e;
  margin: 10px 0;
  padding: 10px;
  text-align: left;
  width: 100%;
}

.question-summary-item:hover {
  color: #fff;
  background-color: #35495e;
}

.question-name {
  margin-bottom: 5px;
}

@media screen and (min-width: 768px) {
  .question-summary-item {
    margin: 10px 1%;
    width: 48%;
    display: inline-block;
  }
}

@media screen and (min-width: 1024px) {
  .question-summary-item {
    margin: 10px 1%;
    width: 31%;
  }
}

@media screen and (min-width: 1440px) {
  .question-summary-item {
    margin: 10px 1%;
    width: 23%;
  }
}
</style>
