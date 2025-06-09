<script setup>
defineProps({
  heading: String,
  iconUrl: String,
});
</script>

<template>
  <div class="feature">
    <img class="feature__icon" :src="iconUrl" alt="" />
    <h3 class="feature__heading">{{ heading }}</h3>
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
.feature {
  flex-basis: 300px;

  @media (--breakpoint-lg) {
    flex-basis: auto;
  }
}

.feature__icon {
  display: inline-block;
}

.feature__heading {
  margin-top: 2rem;
  margin-bottom: 1.25rem;
}
</style>
