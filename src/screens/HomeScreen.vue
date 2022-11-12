<template>
    <div>
        Home
        <div>

        <CNotification 
            :title="`Pause mobile <span style='color:red'>notifications</span> while you're using this device`"
            :content="`To pause Chat mobile notifications while you’re active on this <b>device</b>, allow your browser to detect if you’re active or away. Click `"
            v-model="showNotification" 
        />

        <button @click="showNotification = !showNotification">click</button>
  </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CNotification from "../components/core/UNotification/UNotification.vue";
const showNotification = ref(false)
</script>