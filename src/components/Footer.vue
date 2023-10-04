<template>
    <div class="footer">

        <Menu></Menu>

    </div>
    
</template>


<script>
import Menu from './Menu.vue'

export default {
    name: "Footer",
    components: {
        Menu
    }
}
</script>

<style lang="scss" scoped>

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
}

</style>