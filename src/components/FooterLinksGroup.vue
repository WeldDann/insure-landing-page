<script setup>
defineProps({
  heading: String,
  headingId: String,
});
</script>

<template>
  <div class="group">
    <h2 class="group__heading" :id="headingId">{{ heading }}</h2>

    <ul class="group__list" :aria-labelledby="headingId">
      <slot />
    </ul>
  </div>
</template>

<style global>
.footer-link {
  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
}
</style>

<style scoped>
.group__heading {
  color: var(--clr-gray-700);
  font-family: Karla;
  font-size: var(--fs-sm);
}

.group__list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--clr-gray-950);
}
</style>
