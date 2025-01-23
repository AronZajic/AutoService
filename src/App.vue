<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li>
            <strong><RouterLink to="/">Auto Service</RouterLink></strong>
          </li>
        </ul>
        <ul>
          <li><RouterLink to="/appointments">Appointments</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
