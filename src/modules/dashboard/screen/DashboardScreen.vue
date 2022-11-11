<template>
    <Layout>
       <div>
            Mostrar alerta
            <CBtn @click="showNotification=true"/>

            <CNotification
                :title="`Pause mobile <span style='color:red'>notifications</span> while you're using this device`"
                :content="`To pause Chat mobile notifications while you’re active on this <b>device</b>, allow your browser to detect if you’re active or away. Click `"
                v-model="showNotification"
            />
       </div>
    </Layout>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import Layout from '../../../layout/LayoutDefautl.vue'
    import CBtn from '../../../components/core/CBtn.vue'
    import CNotification from "../../../components/core/CNotification.vue";

    const showNotification = ref(false)
</script>