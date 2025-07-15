<script setup lang="ts">
    import {useInputUserName} from '@features/useInputUserName';

    const _x = '123';
    const name = ref('');

    onMounted(() => {
        name.value = useInputUserName();
    });
</script>

<template>
    <h1>{{ $t('welcome') }}</h1>
    <h2
        class="text-3xl font-bold underline"
        title="123"
    >
        Hello world!

        <pre>Your name: {{ name }}</pre>
    </h2>
</template>
