<template>
  <header class="header">
    <input type="checkbox" name="ip" id="header__ip" class="header__ip" />
    <label for="header__ip" class="header__button">
      <span class="header__icon"></span>
    </label>
    <nuxt-link to="/" class="header__brand">
      <!-- <img src="" alt="logo" class="header__logo"> -->
      <h1 class="header__logo">The bookStore</h1>
    </nuxt-link>
    <ul class="header__menu">
      <li class="header__item">
        <a href="#" class="header__link">notifications</a>
      </li>
      <li class="header__item">
        <a href="#" class="header__link">My account</a>
      </li>
      <li class="header__item"><a href="#" class="header__link">Cart</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
$size: 1.5rem;
$spacing: 0.345rem;

.header {
  background-color: $color-primary;
  color: #fff;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;

  &__ip{
      display: none !important;
      visibility: hidden;
  }


  &__button {
    display: block;
    height: $size;
    width: $size;
    margin-right: 1rem;
    // background-color: orangered;
    cursor: pointer;
    position: relative;
  }

  &__icon {
    display: block;
    height: 2px;
    width: 80%;
    background-color: #fff;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: -$spacing;
      background-color: #fff;
    }

    &::after {
      top: $spacing;
    }
  }

  &__logo {
    font-size: 1rem;
    color: #fff;
  }

  &__menu {
    display: flex;
    margin-left: auto;
    list-style: none;
  }

  &__item {
    padding: 0.5rem 0.25rem;
  }

  a.header__link {
    color: #fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.275rem;
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: #fff;
      color: $color-primary;
    }
  }
}
</style>