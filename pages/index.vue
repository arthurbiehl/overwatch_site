<template>

<div class="div" v-for="item in roles" :key="item">
  <p>{{ item.name }}</p>
  <img :src="item.icon" alt="">
</div>

<div class="div" v-for="item in games" :key="item">
  <p>{{ item.name }}</p>
  <img :src="item.icon" alt="">
  <p>{{ item.description }}</p>
</div>

<div class="div" v-for="item in maps" :key="item">
  <p>{{ item.name }}</p>
  <img :src="item.screenshot" alt="">
  <p>{{ item.location }}</p>
  <p>{{ item.gamemodes }}</p>
</div>

</template>

<script setup>

useHead({
  title: 'overwatch',
});

const store = useOver();
const { overChar } = storeToRefs(store);
const { roles } = storeToRefs(store)
const { games } = storeToRefs(store)
const { maps } = storeToRefs(store) 

onMounted(()=>{
  store.getChar();
  store.getRoles();
  store.getGames();
  store.getMaps();
})

</script>

<style>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

svg {
  position: absolute;
  z-index: 0;
}

img {
  width: 100px  ;
}
</style>