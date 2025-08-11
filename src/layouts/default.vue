<script setup lang="ts">
    import Header from '@components/header/Header.vue';
</script>

<template>
    <div>
        <Header />

        <div>
            <slot></slot>
        </div>
    </div>
</template>
