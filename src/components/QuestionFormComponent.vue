<template>
  <form class="question-form" @submit.prevent="handleSubmit">
    <fieldset>
      <legend>Ask a Question</legend>

      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        v-model="email"
        required
      />

      <label for="message">Message:</label>
      <textarea
        id="message"
        rows="3"
        v-model="message"
        required
      ></textarea>

      <button type="submit">
        Submit
      </button>
    </fieldset>
  </form>
</template>

<script>
import { useQuestionsStore } from '@/stores/questions'

export default {
  name: 'QuestionFormComponent',
  data() {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    handleSubmit() {
      const questionsStore = useQuestionsStore()

      questionsStore.addQuestion({
        email: this.email,
        message: this.message
      })

      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>

textarea, select, input {
  background-color: lightcyan;
  color: black;
}

.question-form {
  max-width: 600px;
  margin: 1rem auto;
}

label {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  margin-top: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
