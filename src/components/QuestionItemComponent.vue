<template>
  <article class="question-item">
    <header>
      <strong>Email:</strong> {{ question.email }}
    </header>
    <p>
      <strong>Message:</strong> {{ question.message }}
    </p>
    <button @click="emitDelete">Delete</button>
  </article>
</template>

<script>
export default {
  name: 'QuestionItem',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitDelete() {
      this.$emit('onDelete', this.question.id)
    }
  }
}
</script>

<style scoped>
.question-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}

button:hover {
  background-color: #c62828;
}
</style>
