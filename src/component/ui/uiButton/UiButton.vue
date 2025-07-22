<script setup lang="ts">
    import { computed } from 'vue';
    interface Props {
        disabled?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        disabled: false,
    });

    const uiButtonClasses = computed(() => ({
        'ui-button--disabled': props.disabled,
    }));
</script>

<template>
    <button
        :disabled
        :class="uiButtonClasses"
        class="ui-button"
    >
        <slot ></slot>
    </button>
</template>
