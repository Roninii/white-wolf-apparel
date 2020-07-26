<template>
  <aside class="cart-dropdown">
    <section class="cart-items">
      <ul class="item-list">
        <li v-for="item in cartItems" :key="item.id">
          <CartItem :item="item" />
        </li>
      </ul>
    </section>
    <BaseButton>Go To Checkout</BaseButton>
  </aside>
</template>

<script>
import CartItem from "@/components/Nav/CartItem";
import BaseButton from "@/components/Base/BaseButton";

import { mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    BaseButton,
    CartItem,
  },
  computed: mapState("cart", ["cartItems"]),
};
</script>

<style lang="postcss" scoped>
.cart-dropdown {
  position: absolute;
  min-width: 20rem;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #fff;
  top: 4.5rem;
  right: 0;
  z-index: 5;

  & .cart-items {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  & .item-list {
    list-style-type: none;
    display: grid;
    grid-gap: 1rem;
    gap: 1rem;
  }

  & button {
    margin-top: 0.2rem;
  }
}
</style>
