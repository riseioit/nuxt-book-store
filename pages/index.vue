<template>
<div class="cards">
      <Card @add="add" class="cards__card" :card="cardtest"></Card>
      <Card @add="add" class="cards__card" :card="cardtest2"></Card>
      <Card @add="add" class="cards__card" :card="cardtest3"></Card>
      <Card @add="add" class="cards__card" :card="cardtest4"></Card>
      <Card @add="add" class="cards__card" :card="cardtest5"></Card>
      <Card @add="add" class="cards__card" :card="cardtest6"></Card>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    data(){
      return{
        cardtest: {
          img: "https://source.unsplash.com/random/500x400",
          name: "Engineering chemistry",
          price: "150rs"
        },
        cardtest2: {
          img: "https://source.unsplash.com/random/501x400",
          name: "Engineering physics",
          price: "160rs"
        },
        cardtest3: {
          img: "https://source.unsplash.com/random/530x400",
          name: "Engineering mathematics",
          price: "140rs"
        },
        cardtest4: {
          img: "https://source.unsplash.com/random/550x460",
          name: "Basic civil engineering",
          price: "190rs"
        },
        cardtest5: {
          img: "https://source.unsplash.com/random/500x440",
          name: "Control systems",
          price: "180rs"
        },
        cardtest6: {
          img: "https://source.unsplash.com/random/500x450",
          name: "Computer architecture",
          price: "250rs"
        }
      }
    },
    methods: {
      ...mapMutations({
        addToCart: "ADD_TO_CART"
      }),
      add(e){
        this.addToCart(e);
        console.log("added");
      }
    }
  }

</script>

<style lang="scss" scoped>
.cards{
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;

  @include respond(tab-port){
    padding: 2rem;
  }

  @include respond(tab-land){
    padding: 3rem;
  }

@include respond(desktop){
    padding: 5rem;
  }

  &__card{
    margin: 1rem;
    flex: 1 0 30%;
    width: 100%;
    min-width: 250px;
  }
}
</style>