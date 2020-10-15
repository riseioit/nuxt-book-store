<template>
  <div>
    <TheHeader class="header"/>
    <Nuxt />
  </div>
</template>

<style>
.header{
  position: fixed;
  top: 0;
  width: calc(100% - 5rem);
  left: 0;

  z-index: 99999;
}
</style>
