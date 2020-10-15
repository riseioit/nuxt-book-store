<template>
  <ul class="sub">
    <li v-for="(item, index) in links" :key="index" class="sub__item">
      <a href="#" :data-target="item.link" v-if="typeof item.link == 'function'" @click=item.link class="sub__link">{{ item.item }}</a>
      <a href="#" :data-target="item.link" v-else class="sub__link">{{ item.item }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sub {
  list-style: none;
    background: #fff;
    border-radius: 0.25rem;

  a.sub__link {
      color: $color-primary;
    display: inline-block;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease-out;

    &:hover {
        background-color:rgba(255, 255, 255, .9);
    }
  }
}
</style>