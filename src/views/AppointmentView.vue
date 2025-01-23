<script setup lang="ts">
import TimePicker from '../components/AppointmentForm.vue';
import Calendar from '../components/CalendarComponent.vue'
</script>

<template>
  <main>
    <h2>Book an appointment:</h2>
    <TimePicker />
    <h2>Our booked appointments</h2>
    <Calendar />
  </main>
</template>
