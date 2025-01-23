import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questions',
  state: () => ({

    questions: JSON.parse(localStorage.getItem('questions') || '[]')
  }),
  getters: {
    questionsCount(state) {
      return state.questions.length
    }
  },
  actions: {

    addQuestion({ email, message }) {

      const id = Date.now()

      this.questions.push({
        id,
        email,
        message
      })

      this.saveLocalStorage()
    },

    removeQuestion(id) {
      this.questions = this.questions.filter(question => question.id !== id)
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      localStorage.setItem('questions', JSON.stringify(this.questions));
    }
  }
})
