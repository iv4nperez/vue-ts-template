<template>
    <button
        class="btn__base"
        :class="[
            {'primary': variant === 'primary'},
            {'text': variant === 'text'},
            {'danger': variant === 'danger'},
            {'warning': variant === 'warning'},

        ]"
    >
        <slot />
    </button>
</template>


<script setup lang="ts">

export interface IProps {
    variant: 'primary' | 'text' | 'danger' | 'warning'
}

const props = withDefaults(defineProps<IProps>(), {
    variant: 'primary'
})
</script>