<template>
  <div>
    <h1>parent-container</h1>
    <div>
      <a href="/" style="margin-right: 20px">page1</a>
      <nuxt-link to="/page2" style="margin-right: 20px">page2</nuxt-link>
      <router-link to="/page3" style="margin-right: 20px">page3</router-link>
      <a href="/page4" style="margin-right: 20px">page4</a>
    </div>
    <slot />
  </div>
</template>