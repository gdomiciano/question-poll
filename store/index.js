import Vuex from 'vuex'

const domain = 'https://private-anon-40beb46424-pollsapi.apiary-proxy.com';

const state = {
  questions: null,
  questionDetails: null,
};

const mutations = {
  SET_PAGE_TITLE (state) {
    state.counter++
  },
  SET_QUESTIONS (state, model) {
    state.questions = model;
  },
  SET_QUESTION_DETAILS (state, model) {
    state.questionDetails = model;
  },
};

const actions = {
  async getQuestions ({ commit }) {
    const questions = await this.$axios.$get(`${domain}/questions`);
    commit('SET_QUESTIONS', questions);
  },

  async getQuestionDetails ({ commit }, id) {
    const question = await this.$axios.$get(`${domain}/questions/${id}`);
    console.log(question)
    commit('SET_QUESTION_DETAILS', question);
  },
};

const getters = {
  questionsSummary: state => {
    if (state.questions) {
      const summary = state.questions.map((q) => {
        let id = q.url.split('/');
        id = id[id.length-1];
        const totalChoices = q.choices.length;
        const date = new Date(q.published_at);
        const publishDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        const questionName = q.question;
        const url = `/question/${id}`;

        return {
          id,
          totalChoices,
          publishDate,
          questionName,
          url,
        };
      });

      return summary;
    }

    return null;
  },

  currentQuestion: state => {
    const choices = state.questionDetails.choices;
    let totalVotes = 0;
    choices.forEach(choice => totalVotes += choice.votes);

    return {
      totalVotes,
      choices,
    };
  },
};

const store = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });
};

export default store;
