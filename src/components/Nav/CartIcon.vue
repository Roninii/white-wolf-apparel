<template>
    <button class="cart-icon" @click="toggleCartHidden">
        <ShoppingIcon class="shopping-icon" />
        <span class="item-count">0</span>
    </button>
</template>

<script>
import ShoppingIcon from '@/components/Base/ShoppingIcon';
export default {
    name: 'CartIcon',
    components: {
        ShoppingIcon,
    },
};
</script>

<style lang="postcss" scoped>
.cart-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: none;
    padding: 10px 15px;

    & .shopping-icon {
        height: 30px;
        width: 30px;
    }

    & .item-count {
        position: absolute;
        font-size: 10px;
        font-weight: bold;
        bottom: 15px;
    }
}
</style>
