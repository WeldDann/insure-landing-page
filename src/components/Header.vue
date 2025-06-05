<script setup>
import { ref } from 'vue';
import HeaderMenu from './HeaderMenu.vue';
import logoUrl from '../assets/images/logo.svg';
import hamburgerIconUrl from '../assets/images/icons/icon-hamburger.svg';
import closeIconUrl from '../assets/images/icons/icon-close.svg';

const menuIsExpanded = ref(false);
</script>

<template>
  <header>
    <div class="header__container container">
      <img :src="logoUrl" alt="Insure" />

      <button
        class="header__menu-toggle"
        type="button"
        :aria-expanded="menuIsExpanded"
        aria-controls="header-menu"
        @click="menuIsExpanded = !menuIsExpanded">
        <span class="visually-hidden">Open navigation</span>
        <img :src="menuIsExpanded ? closeIconUrl : hamburgerIconUrl" alt="" />
      </button>

      <nav class="header__nav" aria-label="Primary">
        <a class="header__nav-link" href="#">How we work</a>
        <a class="header__nav-link" href="#">Blog</a>
        <a class="header__nav-link" href="#">Account</a>
        <a class="header__nav-link header__nav-link--plans button button--dark" href="#"
          >View Plans</a
        >
      </nav>
    </div>

    <HeaderMenu v-show="menuIsExpanded" />
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  padding-block: 1.5rem;
  background-color: white;
  letter-spacing: var(--ls-md);
  text-transform: uppercase;
  z-index: 99;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__menu-toggle {
  @media (--breakpoint-lg) {
    display: none;
  }
}

.header__nav {
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (--breakpoint-lg) {
    display: flex;
  }
}

.header__nav-link {
  font-size: var(--fs-sm);

  &:not(.header__nav-link--plans) {
    transition: color 200ms ease;

    &:hover,
    &:focus-visible {
      color: var(--clr-gray-950);
    }
  }
}

.header__nav-link--plans {
  margin-left: 0.5rem; /* Extra gap */
}
</style>
