<template>
  <div class="collection-item">
    <div class="image" :style="{ backgroundImage: `url(${item.imageUrl})` }" />
    <footer class="collection-footer">
      <span class="name">{{ item.name }}</span>
      <span class="price">{{ item.price }}</span>
    </footer>
    <BaseButton inverted @click="addItem(item)">
      Add To Cart
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton";
import { mapActions } from "vuex";

export default {
  name: "CollectionItem",
  components: {
    BaseButton,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions("cart", ["addItem"]),
  },
};
</script>

<style lang="postcss" scoped>
.collection-item {
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  & .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  & .base-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  & .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    & .base-button {
      opacity: 0.85;
      display: flex;
    }
  }
}
</style>
