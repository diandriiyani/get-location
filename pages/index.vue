<script setup lang="ts">
import { useGeolocation } from '~/composables/useGeolocation';

const { latitude, longitude, error, getLocation } = useGeolocation();
</script>

<template>
  <div>
    <h1>Geolocation</h1>
    <p v-if="latitude !== null && longitude !== null">
      Latitude: {{ latitude }}, Longitude: {{ longitude }}
    </p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Loading...</p>
    <button @click="getLocation">Update Location</button>
  </div>
</template>


<style>
button {
  margin-top: 20px;
}
</style>
