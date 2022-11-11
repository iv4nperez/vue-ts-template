<template>
    <div v-if="show" class="c__notification__container">
        <div class="flex">
            <div class="w-16 p-3">
            <img src="https://fonts.gstatic.com/s/i/googlematerialicons/notifications_paused/v10/gm_blue-48dp/1x/gm_notifications_paused_gm_blue_48dp.png" alt="">
        </div>
        <div class="c__notification__content">
            <div class="mb-3 w-60">
                <h2 class="c__notification__title" v-html="title"></h2>
            </div>
            <div class="c__notification__content__description" v-html="content"></div>
            <div class="flex gap-4 mt-4">
                <button class="bg-blue-primary px-4 rounded-[4px] h-9 text-white font-googleSans hover:shadow-md hover:shadow-blue-300 hover:opacity-95 font-medium ">Continue</button>
                <button class="bg-white px-4 rounded-[4px] h-9 text-[#5f6368] font-googleSans hover:bg-gray-200 transition-colors ease-in-out font-medium">No thanks</button>
                <button @click="show = false" class="absolute top-3 right-0">
                    <CloseIcon class="text-gray-600" />
                </button>
            </div>
        </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { computed } from 'vue';
import CloseIcon from '../../assets/icons/CloseIcon.vue'
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
})
const show = computed({
    get(){
        return props.modelValue
    },
    set(val: boolean){
        emit('update:modelValue', val)
    }
})


</script>