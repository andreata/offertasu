<template>
    <g-link :to="post.uri" class="post-card ">

        <div class="post-card__content" :style="`background-image: url( ${post.featuredImage.node.mediaItemUrl} )`">

            <h2 class="post-card__title" v-html="post.title" />
            <formated-date class="post-date date post-card__date" :date="post.date" />




        </div>
    </g-link>
</template>




<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import FormatedDate from "~/components/FormatedDate.vue"
export default {
    components: {
        PostMeta,
        PostTags,
        FormatedDate

    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },

}
</script>

<style lang="scss" scoped>




.post-card {
    align-items: center;
    display: flex;
    margin-bottom: var(--space2);
    position: relative;
    text-decoration: none;
    &__content {
        padding-top: 80px;
        padding-bottom: 30px;
        background-size: cover;
        border-radius: 3px;
    }

  
    &__date {
        font-size: 16px;
        padding: 0 30px;
        
      
        color: var(--bg-color-rgba);
        max-width: fit-content;
        border-radius: var(--radius);
    }

 
    &__title {
        border-top: 0;
        text-transform: none;
        padding: 0 30px;
        margin-top: 0;
        font-size: 16px;
        color: var(--bg-color-rgba);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
    }

  
}
</style>
