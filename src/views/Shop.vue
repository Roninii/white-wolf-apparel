<template>
    <main>
        <CollectionPreview
            v-for="{ id, ...collectionData } in shopData"
            :key="id"
            :collection="collectionData"
        />
    </main>
</template>

<script>
import SHOP_DATA from '@/api/shop-data.js';

import CollectionPreview from '@/components/Shop/CollectionPreview';

export default {
    name: 'Shop',
    components: {
        CollectionPreview,
    },
    data() {
        return {
            shopData: SHOP_DATA,
        };
    },
};
</script>
