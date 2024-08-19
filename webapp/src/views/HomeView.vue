<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import TheWelcome from '../components/TheWelcome.vue'
const { getUser } = useUserStore()
</script>

<template>
  <main>
    <TheWelcome />
    {{ getUser() }}
  </main>
</template>
