<template>

    <div class="char_card">
        <div class="char_card_user" v-for="item in overChar" :key="item">
            <p>{{ item.name }}</p>
            <p>{{ item.role }}</p>
            <img :src="item.portrait" alt="">
        </div>
    </div>


</template>

<script setup>

const store = useOver();
const { overChar } = storeToRefs(store)

onMounted(() => {
    store.getChar();
})

</script>