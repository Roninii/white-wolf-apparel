<template>
    <div class="directory-menu">
        <MenuItem v-for="{ id, ...section } in sections" :key="id" :section="section" />
    </div>
</template>

<script>
import sections from './sections';
import MenuItem from './MenuItem';

export default {
    name: 'Directory',
    components: {
        MenuItem,
    },
    data() {
        return {
            sections,
        };
    },
};
</script>

<style scoped>
.directory-menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
