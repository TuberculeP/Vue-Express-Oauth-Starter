<script setup lang="ts">
import { apiClient } from '@/services/api'
</script>
<template>
  <div>
    <button @click="apiClient.login">connexion avec google</button>
  </div>
</template>
