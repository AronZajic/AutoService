<template>
  <section class="admin-view">
    <h1>Admin Panel</h1>

    <h2>Appointments</h2>
    <p v-if="appointments.length === 0">
      No appointments available.
    </p>
    <div v-else>
      <AppointmentItem
        v-for="appt in appointments"
        :key="appt.id"
        :appointment="appt"
        @onDelete="removeAppointment"
        @onToggleComplete="toggleComplete"
      />
    </div>

    <hr />

    <h2>Questions</h2>
    <p v-if="questions.length === 0">
      No questions available.
    </p>
    <div v-else>
      <QuestionItemComponent
        v-for="question in questions"
        :key="question.id"
        :question="question"
        @onDelete="removeQuestion"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppointmentsStore } from '@/stores/appointments.ts'
import { useQuestionsStore } from '@/stores/questions.ts'
import AppointmentItem from '@/components/AppointmentItem.vue'
import QuestionItemComponent from '@/components/QuestionItemComponent.vue'

export default defineComponent({
  name: 'AdminView',
  components: {
    AppointmentItem,
    QuestionItemComponent
  },
  setup() {
    const appointmentsStore = useAppointmentsStore()
    const questionsStore = useQuestionsStore()

    const appointments = computed(() => appointmentsStore.appointments)
    const questions = computed(() => questionsStore.questions)

    function removeAppointment(id: number) {
      appointmentsStore.removeAppointment(id)
    }
    function toggleComplete(id: number) {
      appointmentsStore.toggleCompleted(id)
    }
    function removeQuestion(id: number) {
      questionsStore.removeQuestion(id)
    }

    return {
      appointments,
      questions,
      removeAppointment,
      removeQuestion,
      toggleComplete
    }
  }
})
</script>

<style scoped>
.admin-view {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}

h2 {
  margin-top: 2rem;
}
</style>
