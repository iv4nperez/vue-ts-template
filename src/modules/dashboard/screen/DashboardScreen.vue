<template>
    <Layout>
       <div>
            <div class="flex gap-5">
                <u-btn variant="primary" @click="showNotification=true">
                    Continuar
                </u-btn>
                <u-btn variant="text"     @click="showNotification=true">
                    Cancelar
                </u-btn>
                <u-btn variant="warning" @click="showNotification=true">
                    Confirmar
                </u-btn>
                <u-btn variant="danger" @click="showNotification=true">
                    Confirmar
                </u-btn>
            </div>  

            <u-notification
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

    import { UBtn, UNotification } from '../../../components/core'
    // import CNotification from "../../../components/core/CNotification.vue";

    const showNotification = ref(false)
</script>