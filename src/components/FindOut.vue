<template>
  <section class="find-out" aria-labelledby="find-out__heading">
    <div class="find-out__container container">
      <h2 class="find-out__heading">Find out more about how we work</h2>
      <a class="find-out__btn button button--white" href="#">How we work</a>
    </div>
  </section>
</template>

<style scoped>
.find-out {
  color: white;
}

.find-out__container {
  padding-inline: 2.5rem;
  padding-block: 4.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-blue-950);
  background-image: url('/images/bg-pattern-how-we-work-mobile.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right top;

  @media (--breakpoint-lg) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    background-image: url('/images/bg-pattern-how-we-work-desktop.svg');
  }
}

.find-out__heading {
  color: inherit;
  text-align: center;

  @media (--breakpoint-lg) {
    text-align: left;
  }
}

.find-out__btn {
  margin-top: 2.75rem;
  display: block;
  text-wrap: nowrap;
}
</style>
