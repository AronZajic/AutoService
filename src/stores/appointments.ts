import { defineStore } from 'pinia'

export const useAppointmentsStore = defineStore({
  id: 'appointments',
  state: () => ({
    appointments: JSON.parse(localStorage.getItem('appointments') || '[]')
  }),
  getters: {
    appointmentsCount: (state) => state.appointments.length
  },
  actions: {
    addAppointment({ email, message, timestamp }) {
      const id = Date.now()

      this.appointments.push({
        id,
        email,
        message,
        timestamp,
        completed: false
      })

      this.appointments.sort((a, b) => a.timestamp - b.timestamp)

      this.saveLocalStorage()
    },
    removeAppointment(id) {
      this.appointments = this.appointments.filter(appt => appt.id !== id)
      this.saveLocalStorage()
    },
    toggleCompleted(id) {
      const appt = this.appointments.find(a => a.id === id)
      if (!appt) return

      appt.completed = !appt.completed
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }
})
