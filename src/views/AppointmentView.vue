<script setup lang="ts">
import AppointmentForm from '../components/AppointmentForm.vue';
import Calendar from '../components/CalendarComponent.vue'
</script>

<template>
  <main>
    <h2>Book an appointment:</h2>
    <AppointmentForm />
    <h2>Our booked appointments</h2>
    <Calendar />
  </main>
</template>
