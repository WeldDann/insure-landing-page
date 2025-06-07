<script setup>
import leftBgPatternUrl from '../assets/images/bg-pattern-intro-left-desktop.svg';
import rightBgPatternMobileUrl from '../assets/images/bg-pattern-intro-right-mobile.svg';
import rightBgPatternDekstopUrl from '../assets/images/bg-pattern-intro-right-desktop.svg';
import heroImgUrl from '../assets/images/image-intro-desktop.jpg';
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <img class="hero__mobile-img" :src="heroImgUrl" alt="Happy family holding hands." />

    <div class="hero__container container">
      <div class="hero__info-container">
        <h1 class="hero__heading" id="hero-heading">Humanizing your insurance</h1>
        <p class="hero__desc">
          Get your life insurance coverage easier and faster. We blend our expertise and technology
          to help you find the plan that's right for you. Ensure you and your loved ones are
          protected.
        </p>
        <a class="hero__btn button button--white" href="#"> View plans </a>
      </div>

      <div class="hero__img-container">
        <img class="hero__desktop-img" :src="heroImgUrl" alt="Happy family holding hands." />
      </div>
    </div>

    <img class="hero__bg-pattern hero__bg-pattern--left" :src="leftBgPatternUrl" alt="" />
    <img
      class="hero__bg-pattern hero__bg-pattern--right-mobile"
      :src="rightBgPatternMobileUrl"
      alt="" />
    <img
      class="hero__bg-pattern hero__bg-pattern--right-desktop"
      :src="rightBgPatternDekstopUrl"
      alt="" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: var(--clr-blue-950);
  color: white;

  & > * {
    position: relative;
    z-index: 20;
  }

  @media (--breakpoint-lg) {
    margin-bottom: 18.75rem;
  }
}

.hero__mobile-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  max-height: 500px;

  @media (--breakpoint-lg) {
    display: none;
  }
}

.hero__container {
  display: grid;
  padding-block: 6.5rem;

  @media (--breakpoint-lg) {
    padding-bottom: 8rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
}

.hero__info-container {
  text-align: center;

  @media (--breakpoint-lg) {
    text-align: left;

    &::before {
      content: '';
      width: 150px;
      height: 1px;
      display: block;
      background-color: white;
    }
  }
}

.hero__heading {
  color: inherit;

  @media (--breakpoint-lg) {
    margin-top: 4.5rem;
  }
}

.hero__desc {
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (--breakpoint-lg) {
    margin-top: 2rem;
  }
}

.hero__btn {
  display: inline-block;
}

.hero__img-container {
  position: relative;
}

.hero__desktop-img {
  object-fit: cover;
  object-position: center;
  height: 170%;
  max-height: 750px;
  display: none;
  position: absolute;

  @media (--breakpoint-lg) {
    display: block;
  }
}

.hero__bg-pattern {
  position: absolute;
  z-index: 10;
}

.hero__bg-pattern--left {
  bottom: 25%;

  @media (--breakpoint-lg) {
    top: 100%;
    transform: translateY(-33%);
  }
}

.hero__bg-pattern--right-desktop {
  top: 0;
  right: 0;
  display: none;
  transform: translate(30%, -15%);
  z-index: 30;

  @media (--breakpoint-lg) {
    display: block;
  }

  @media (--breakpoint-xl) {
    transform: translateY(-15%);
  }
}

.hero__bg-pattern--right-mobile {
  right: 0;
  bottom: 0;
  transform: translateY(50%);

  @media (--breakpoint-lg) {
    display: none;
  }
}
</style>
