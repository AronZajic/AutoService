<script>
import { useAppointmentsStore } from '@/stores/appointments.ts'
import { useQuestionsStore } from '@/stores/questions.ts'
import AppointmentItem from '@/components/AppointmentItem.vue'
import QuestionItemComponent from '@/components/QuestionItemComponent.vue';

export default {
  name: 'AdminView',
  components: {
    AppointmentItem,
    QuestionItemComponent
  },
  data() {
    return {
    }
  },
  computed: {
    appointments() {
      const store = useAppointmentsStore()
      return store.appointments
    },
    questions() {
      const store = useQuestionsStore()
      return store.questions
    }
  },
  methods: {
    removeAppointment(id) {
      const store = useAppointmentsStore()
      store.removeAppointment(id)
    },
    removeQuestion(id) {
      const store = useQuestionsStore()
      store.removeQuestion(id)
    }
  }
}
</script>

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
