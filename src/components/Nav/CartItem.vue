<template>
  <div class="cart-item">
    <img :src="item.imageUrl" :alt="`model wearning ${item.name}`" />
    <div class="item-details">
      <span class="name">{{ item.name }}</span>
      <span class="price"> {{ item.quantity }} x ${{ item.price }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="postcss" scoped>
.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr;

  & img {
    width: 12rem;
    height: auto;
  }

  & .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    & .name {
      font-size: 16px;
    }
  }
}
</style>
