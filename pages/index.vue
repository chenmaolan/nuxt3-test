<template>
  <div>
    <h2>page1</h2>
    <template v-for="(item, index) in 20" :key="index">
      <div class="animated">{{ index }}</div>
    </template>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  console.log($, "=====juquery", $(".animated"));
  console.log(
    document.getElementsByClassName("animated"),
    "=====getElementsByClassName"
  );
  setTimeout(() => {
    console.log($, "setTimeout=====juquery", $(".animated"));
    console.log(
      document.getElementsByClassName("animated"),
      "setTimeout=====getElementsByClassName"
    );
  }, 10);
});
</script>