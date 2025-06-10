<template>
  <div class="header-menu" id="header-menu">
    <nav class="header-menu__nav container" aria-label="Primary">
      <a class="header-menu__link" href="#">How we work</a>
      <a class="header-menu__link" href="#">Blog</a>
      <a class="header-menu__link" href="#">Account</a>
      <a class="header-menu__link header-menu__link--plans button button--white" href="#"
        >View Plans</a
      >
    </nav>
  </div>
</template>

<style scoped>
.header-menu {
  --gap: 3rem;

  width: 100vw;
  height: calc(100vh - 100%);
  padding-top: var(--gap);
  position: absolute;
  top: 100%;
  background-color: var(--clr-gray-950);
  background-image: url('/images/bg-pattern-mobile-nav.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom;
  color: white;

  @media (--breakpoint-lg) {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: menu-slide 200ms ease-out;
  }
}

.header-menu__nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
  line-height: 1; /* For consistent gaps */
}

.header-menu__link {
  font-size: var(--fs-md);
}

.header-menu__link--plans {
  padding-block: 1.25rem;
  align-self: stretch;
  text-align: center;
}

@keyframes menu-slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
