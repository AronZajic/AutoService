<template>
  <section class="admin-view">
    <h1>Admin Panel: Appointments</h1>

    <!-- If no appointments exist, show a message -->
    <p v-if="appointments.length === 0">
      No appointments available.
    </p>

    <!-- Otherwise, list them -->
    <div v-else>
      <AppointmentItem
        v-for="appt in appointments"
        :key="appt.id"
        :appointment="appt"
        @onDelete="removeAppointment"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppointmentsStore } from '@/stores/appointments.ts'  // Adjust path as needed
import AppointmentItem from '@/components/AppointmentItem.vue'   // Adjust path as needed

// Access the Pinia store
const appointmentsStore = useAppointmentsStore()

// A computed property that returns the current list of appointments
const appointments = computed(() => appointmentsStore.appointments)

/**
 * Handle delete event from a child component
 * @param {number} id - ID of the appointment to remove
 */
function removeAppointment(id) {
  appointmentsStore.removeAppointment(id)
}
</script>

<style scoped>
.admin-view {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
