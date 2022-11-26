<template>
    <g-link :to="post.uri" class="post-card ">

        <div class="post-card__content">
            <g-image alt="Cover image" v-if="post.featuredImage" class="post-card__image"
                :src="post.featuredImage.node.mediaItemUrl" />
            <h2 class="post-card__title" v-html="post.title" />
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
    text-decoration: none;
    margin-bottom: var(--space2);
 

    &__image {
        width: 65px;
        height: 65px;
        object-fit: cover;
    }

    &__content {
        display: grid; 
        grid-template-columns: 1fr 4fr;
    }




    &__title {
        text-transform: none;
        padding: 0 15px;
        margin-top: 0;
        font-size: 16px;
        border-top: 0;
        color: var(--title-color);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
    }


}
</style>
