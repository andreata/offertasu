<template>
    <div class="post-card  ">
        <div class="post-card__header">
            <g-image alt="Cover image" v-if="post.featuredImage" class="post-card__image"
                :src="post.featuredImage.node.mediaItemUrl" />
        </div>
        <div class="post-card__content">
           
            <div class="flex-meta">

                <!-- <p class="post-card__author" v-html="post.author.node.name" />
        <formated-date class="post-date date post-card__date" :date="post.date" /> -->
            </div>
            <h2 class="post-card__title" v-html="post.title" />

            <div class="post-card__description" v-html="post.excerpt.substring(0, 100) + '...'" />
            <g-link class="post-card__link button-pieno" :to="post.uri">Leggi tutto</g-link>


        </div>
    </div>
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
.container-box {
    .post-card {
        height: 100%;
        margin-bottom: 0;


    }
}

.container-box,
.content-category {
    .post-card {
        &__header {}
    }
}

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
    width: calc(100% - 60px);
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    position: relative;
    margin-bottom: 30px !important;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 30px !important;
        grid-template-columns: 1fr;
    }

    .flex-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: calc(var(--space2) / 2);
    }

    &__author {
        font-size: 0.5rem;
        margin-bottom: 0;
    }

    &__date {
        font-size: 0.5rem;
        padding: 0.1rem 0.3rem;
        border: 1px solid var(--title-color);
        color: var(--title-color);
        max-width: fit-content;
        border-radius: var(--radius);
    }

    &__content {
        @media screen and (max-width: 768px) {
            padding: 9px;
        }
    }

    &__header {

        overflow: hidden;

        @media screen and (min-width: 768px) {
            padding-right: 30px;
        }

        @media screen and (max-width: 768px) {
            margin-left: calc(var(--space2) * -0.5);
            margin-right: calc(var(--space2) * -0.5);
        }

        &:empty {
            display: none;
        }
    }

    &__image {
        min-width: 100%;
        max-width: 200px;

        @media screen and (min-width: 768px) {
            aspect-ratio: 0.8 / 1;
        }

        object-fit: cover;
    }

    &__title {
        margin-top: 0;
        font-size: 25px;
    }

    &__tags {
        z-index: 1;
        position: relative;
    }

    &__link {
        background-color: var(--orang-color);
        padding: 10px 18px;
        color: var(--bg-color-rgba);
        border-radius: 30px;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;

        @media screen and (max-width: 768px) {
            padding: 7px 12px;
        }
    }

    &__description {
        font-size: 13px;
        color: var(--grey-body-color);
    }
}
</style>
