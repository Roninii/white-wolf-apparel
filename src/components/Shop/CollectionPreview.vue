<template>
    <article class="collection-preview">
        <h1 class="title">{{ collection.title }}</h1>
        <section class="preview">
            <CollectionItem v-for="item in items" :key="item.id" :item="item" />
        </section>
    </article>
</template>

<script>
import CollectionItem from '@/components/Shop/CollectionItem';

export default {
    name: 'CollectionPreview',
    components: {
        CollectionItem,
    },
    props: {
        collection: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        items() {
            return this.collection.items.filter((item, i) => i < 4);
        },
    },
};
</script>

<style lang="postcss" scoped>
.collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    & .title {
        font-size: 28px;
        text-transform: uppercase;
        margin-bottom: 25px;
    }

    & .preview {
        display: flex;
        justify-content: space-between;
    }
}
</style>
