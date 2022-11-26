<template>
    <g-link :to="post.uri" class="post-card ">

        <div class="post-card__content" :style="`background-image: url( ${post.featuredImage.node.mediaItemUrl} )`">

            <div class="box-cate">
                <div v-for="node in post.categories.nodes" :key="node.slug">
                    <p>{{ node.name }}</p>
                </div>
            </div>

            <h2 class="post-card__title" v-html="post.title" />
           

            <div class="post-card__description" v-html="post.excerpt.substring(0,100)+ '...'" />
            <g-link class="post-card__link button-pieno" :to="post.uri">Leggi tutto</g-link>


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
.box-cate {
    background-color: var(--light-orange);
    border-radius: 5px;
    padding: 5px 10px;
    max-width: fit-content;
    display: flex;

    p {
        margin-bottom: 0;
        color: var(--orang-color);
        font-weight: 800;
        font-size: 0.7rem;
        text-transform: uppercase;
        margin-right: 10px;
    }
}
.post-card {
    
    align-items: center;
    display: flex;
    margin-bottom: var(--space2);
    position: relative;
    text-decoration: none;

    &__description {
        padding: 0 30px;
    }
        &__link {
        margin-left: 30px;
        }
    .box-cate {
        margin-left: 30px;
    }

    &__content {
        
        width: calc(100% - 60px);
        
            @media screen and (max-width: 768px) {
                width: 100%;
            }
        padding-top: 80px;
        padding-bottom: 80px;
        background-size: cover;
                color: var(--bg-color-rgba);
        border-radius: 3px;
    }


 


    &__title {
        border-top: 0;
        text-transform: none;
        padding: 0 30px;
        margin-top: 0;
        font-size: 30px;
        color: var(--bg-color-rgba);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
    }


}
</style>
