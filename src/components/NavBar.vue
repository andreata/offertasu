<template>
    <div class="nav-right">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
        </label>
        <ul class="nav itemnav menu">

            <li @mouseover="hover = true" @mouseleave="hover = false" v-for="edge in getNavItems(null)">

                <g-link :to="edge.node.path" class="link">{{ edge.node.title }}</g-link>

                <!-- <div @click="toggle" @mouseover="hover = true" @mouseleave="hover = false" class="plus-li">+</div> -->
                <ul class="sub-menu" v-bind:class="{ active: active || hover }">

                    <li v-for="edge in getNavItems(edge.node.key)">
                        <g-link :to="edge.node.path" class="link">{{ edge.node.title }}</g-link>
                    </li>

                </ul>
            </li>

            

            <g-image class="contatti-menu" src="~/assets/images/icon/contatti.svg" alt="" width="200" />

        </ul>
    </div>
</template>

<static-query>
query  {
  menuItems(where: {location: PRIMARY}, first: 200) {
      edges {
        node {
            key: id
            parentId
            title: label
            url
            path
        }
    }
  }
}
</static-query>

<script>

export default {
    data () {
        return {
            active: false,
            hover: false
        }
    },
   
    methods: {
        getNavItems(parentId) {
            return this.$static.menuItems.edges.filter(edge => {
                return edge.node.parentId === parentId
            })
        },
        toggle() {
            this.active = !this.active
        }, 
    },
}

</script>

<style scoped>

</style>

