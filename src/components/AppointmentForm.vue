<template>
  <form class="time-picker" @submit.prevent="handleSubmit">
    <fieldset>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Your email address"
        required
      />

      <label for="msg">Message</label>
      <textarea
        name="msg"
        id="msg"
        rows="3"
        v-model="message"
        placeholder="Message for us"
      ></textarea>

      <div>

      <input
        type="date"
        id="appointmentDate"
        v-model="selectedDate"
        required
      />

      <select id="appointmentTime" v-model="selectedTime">
        <option disabled value="">-- Please choose a time --</option>
        <option v-for="time in times" :key="time" :value="time">{{ time }}</option>
      </select>

        <button type="submit">Book</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { useAppointmentsStore } from '@/stores/appointments'

export default {
  name: 'AppointmentForm',

  data() {
    return {
      email: '',
      message: '',
      selectedDate: '',
      selectedTime: '',
      times: []
    }
  },

  created() {
    this.generateTimes()
  },

  methods: {
    generateTimes() {
      for (let hour = 8; hour < 16; hour++) {
        for (let half = 0; half < 2; half++) {
          const hh = String(hour).padStart(2, '0')
          const mm = half === 0 ? '00' : '30'
          this.times.push(`${hh}:${mm}`)
        }
      }
    },

    handleSubmit() {
      if (!this.selectedDate) {
        alert('Please select a date before booking.')
        return
      }
      if (!this.selectedTime) {
        alert('Please select a time before booking.')
        return
      }

      const dateTimeString = `${this.selectedDate}T${this.selectedTime}:00`
      const dateObj = new Date(dateTimeString)

      const unixTimestamp = dateObj.getTime()

      const store = useAppointmentsStore()

      store.addAppointment({
        email: this.email,
        message: this.message,
        timestamp: unixTimestamp
      })

      this.email = ''
      this.message = ''
      this.selectedDate = ''
      this.selectedTime = ''

      // reload page
    }
  }
}
</script>

<style scoped>
textarea, select, input {
  background-color: lightcyan;
  color: black;
}

div {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin: 2rem auto;
}

label {
  font-weight: 600;
}

select {
  cursor: pointer;
}
</style>
