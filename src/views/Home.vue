<template>
    <div class="homepage">
        <Directory />
    </div>
</template>

<script>
// @ is an alias to /src
import Directory from '@/components/Home/Directory.vue';

export default {
    name: 'Home',
    components: {
        Directory,
    },
};
</script>

<style scoped>
.homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
}
</style>
