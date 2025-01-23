<template>
  <article
    class="appointment-item"
    :class="{
      'completed-appointment': appointment.completed,
      'incomplete-appointment': !appointment.completed
    }"
  >
    <header>
      <strong>Email:</strong> {{ appointment.email }}
    </header>
    <p><strong>Message:</strong> {{ appointment.message }}</p>
    <p><strong>When:</strong> {{ formattedDateTime }}</p>

    <button @click="emitDelete">Delete</button>

    <!-- Button to complete or un-complete -->
    <button @click="emitToggleComplete" class="complete-btn">
      {{ appointment.completed ? 'Mark Incomplete' : 'Mark Complete' }}
    </button>
  </article>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'AppointmentItem',
  props: {
    appointment: {
      type: Object,
      required: true
    }
  },
  emits: ['onDelete', 'onToggleComplete'],
  setup(props, { emit }) {
    const formattedDateTime = computed(() => {
      const dateObj = new Date(props.appointment.timestamp)
      return dateObj.toLocaleString()
    })

    function emitDelete() {
      emit('onDelete', props.appointment.id)
    }

    function emitToggleComplete() {
      emit('onToggleComplete', props.appointment.id)
    }

    return {
      formattedDateTime,
      emitDelete,
      emitToggleComplete
    }
  }
}
</script>

<style scoped>
article p {
  color: black;
}

.appointment-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.completed-appointment {
  background-color: #d0ead0;
}
.incomplete-appointment {
  background-color: #ffd9d4;
}

button {
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}

button:hover {
  opacity: 0.9;
}

button:first-of-type {
  background-color: #f44336;
  color: white;
}

.complete-btn {
  background-color: #2196f3;
  color: white;
}
</style>
