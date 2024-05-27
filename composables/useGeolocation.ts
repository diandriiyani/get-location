// composables/useGeolocation.ts
import { ref, onMounted } from 'vue';

export function useGeolocation() {
  const latitude = ref<number | null>(null);
  const longitude = ref<number | null>(null);
  const error = ref<string | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
        },
        (err) => {
          latitude.value = null;
          longitude.value = null;
          console.log("latitude",latitude.value)
          console.log("longitude",longitude.value)
          switch(err.code) {
            case err.PERMISSION_DENIED:
              error.value = "User denied the request for Geolocation.";
              break;
            case err.POSITION_UNAVAILABLE:
              error.value = "Location information is unavailable.";
              break;
            case err.TIMEOUT:
              error.value = "The request to get user location timed out.";
              break;
          }
        }
      );
    } else {
      error.value = "Geolocation is not supported by this browser.";
    }
  };

  onMounted(() => {
    getLocation();
  });

  return {
    latitude,
    longitude,
    error,
    getLocation,
  };
}
