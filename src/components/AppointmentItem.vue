<script setup lang="ts">
import { computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  appointment: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['onDelete'])

const formattedDateTime = computed(() => {
  const dateObj = new Date(props.appointment.timestamp)
  return dateObj.toLocaleString()
})

function emitDelete() {
  emits('onDelete', props.appointment.id)
}
</script>

<style scoped>
.appointment-item {
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

<template>
  <article class="appointment-item">
    <header>
      <strong>Email:</strong> {{ appointment.email }}
    </header>
    <p><strong>Message:</strong> {{ appointment.message }}</p>

    <p><strong>When:</strong> {{ formattedDateTime }}</p>

    <button @click="emitDelete">Delete</button>
  </article>
</template>
