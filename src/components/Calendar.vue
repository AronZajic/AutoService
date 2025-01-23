<script>
import { VSheet, VSelect } from 'vuetify/components'

import { useDate } from 'vuetify'

import { useAppointmentsStore } from '@/stores/appointments'

export default {
  components: {
    VSheet,
    VSelect,
  },
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day'],
    weekday: [1, 2, 3, 4, 5, 6, 0],
    weekdays: [
      { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
    ],
    value: [new Date()],
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    titles: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  mounted() {
    const adapter = useDate()
    this.getEvents({
      start: adapter.startOfDay(adapter.startOfMonth(new Date())),
      end: adapter.endOfDay(adapter.endOfMonth(new Date())),
    })
  },
  methods: {
    getEvents({ start, end }) {
      //const events = []

      /*const min = start
      const max = end
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          title: this.titles[this.rnd(0, this.titles.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          allDay: !allDay,
        })
      }*/

      const store = useAppointmentsStore()

      const events = store.appointments.map(appointment => {
        const startTime = new Date(appointment.timestamp)
        const endTime = new Date(appointment.timestamp + 30 * 60 * 1000)

        const title = 'Appointment with ' + appointment.email
        const color = this.colors[this.rnd(0, this.colors.length - 1)]

        return {
          title: title,
          color,
          start: startTime,
          end: endTime,
        }
      })

      this.events = events
    },
    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<template>
  <h1></h1>
  <main>
    <div class="settings">
      <v-sheet height="54" tile>
        <div>
          <v-select
            v-model="type"
            :items="types"
            label="View Mode"
            variant="outlined"
            dense
            hide-details
          ></v-select>
        </div>
      </v-sheet>
    </div>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  background-color: white;
}
.settings {
  padding: 3rem;
}
</style>
