<template>
<div class="card">
    <img :src="card.img" :alt="card.name" class="card__img">
    <div class="card__heart" @click="$emit('add', card.name)"> &heartsuit; </div> 
    <div class="card__details">
        <h1 class="card__name">{{ card.name }}</h1>
        <h1 class="card__price">{{ card.price }}</h1>
    </div>
</div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-flow: column;

    position: relative;

    // min-width: 10ch;

    // max-height: 500px;
    border-radius: 1rem;
    overflow: hidden;

    &:hover > &__details{
        bottom: 0%;
    }

    &:hover > &__img{
        transform: scale(1.05);
    }

    &:hover > &__heart{
        display: block;
    }

    &__img{
        width: 100%;
        display: block;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        transition: transform .5s;
    }

    &__heart{
        position: absolute;
        display: none;
        right: 5%;
        color: white;
        font-size: 2.5rem;
        top: 2.5%;
        cursor: pointer;
        z-index: 999;
        user-select: none;

        transition: all .3s;

        &:hover {
            color: red;
        }
    }

    &__details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: -100%;
        width: 100%;
        padding: 1rem 1rem;
        backdrop-filter: blur(1rem)  hue-rotate(120deg);
        backface-visibility: hidden;
        color: white;
        
        transition: all .3s;
    }
    
    h1{
        font-size: 1.2rem;
        font-weight: 200;

        &:first-of-type{
            max-width: 50%;
        }
    }
}
</style>