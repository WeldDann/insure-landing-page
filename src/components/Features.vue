<script setup>
import Feature from './Feature.vue';
import snappyIconUrl from '../assets/images/icons/icon-snappy-process.svg';
import pricesIconUrl from '../assets/images/icons/icon-affordable-prices.svg';
import peopleIconUrl from '../assets/images/icons/icon-people-first.svg';
</script>

<template>
  <section class="features" aria-labelledby="features-heading">
    <div class="features__container container">
      <h2 class="features__heading" id="features-heading">We're different</h2>

      <div class="features__features-container">
        <Feature heading="Snappy process" :icon-url="snappyIconUrl">
          Our application process can be completed in minutes, not hours. Don't get stuck filling in
          tedious forms.
        </Feature>
        <Feature heading="Afforable prices" :icon-url="pricesIconUrl">
          We don't want you worrying about high monthly costs. Our prices may be low, but we still
          offer the best coverage possible.
        </Feature>
        <Feature heading="People First" :icon-url="peopleIconUrl">
          Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're
          covered when you need it.
        </Feature>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  text-align: center;

  @media (--breakpoint-lg) {
    text-align: left;
  }
}

.features__container::before {
  content: '';
  width: 150px;
  height: 1px;
  margin-inline: auto;
  display: block;
  background-color: var(--clr-gray-700);

  @media (--breakpoint-lg) {
    margin-inline: 0;
  }
}

.features__heading {
  margin-top: 2.5rem;

  @media (--breakpoint-lg) {
    margin-top: 4.25rem;
  }
}

.features__features-container {
  --gap: 5.5rem;

  margin-top: var(--gap);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);

  @media (--breakpoint-lg) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
