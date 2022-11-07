<template>
  <div>
    <div class="container">
      <div class="title">
        {{cardSstore.name}}
      </div>
      <div class="catalog row">
        <div class="product shadow-3" v-for="card in cardSstore.cards" :key="card.id">
          {{card}}
          <div class="product__main">
            <div class="discount">
              <div class="discount__mark">
                {{card.Chegirma}}
              </div>
              <div class="discount__persent">
                {{card.foiz}}
              </div>
            </div>
            <a href="#" class="product__link">
              <img class="img"
                :src="card.src"
                width="150" height="150" alt="title" />
            </a>
            <div class="product__spacer">
              <div class="product__title text-h6">{{card.telefon}}</div>
            </div>
            <div class="product__spacer">
              <div class="product__prices">
                <div class="product__price none-discount"> <del>{{card.narx}}</del> </div>
                <div class="product__price with-discount">{{card.som}}</div>
              </div>
            </div>
            <div class="product__spacer">
              <div class="product__description">
                {{card.title}}
              </div>
            </div>
            <div class="product__spacer">
              <div class="button row justify-center">
                <q-btn  class="btn shadow-7 mb-20px" padding="5px 40px 5px 40px" >button </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCardStore} from "./stores/cardStore"
  export default {
    setup() {
      const cardSstore = useCardStore()
      return{cardSstore}
    },
  }
  
</script>
<style lang="sass">
.container
  height: auto
.title
  font-size: 1.875rem
  font-weight: 560
.catalog
  width: 100%
  display: flex
  align-items: space-between
  flex-wrap: wrap
.wrapper
    width: 100%
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
.product
    width: 200px
    //height: 400px
    border: 1px solid #fffff
    border-radius: 10px
    margin: 20px auto
    // margin: 20px 20px 20px 0
.product__main
    width: 90%
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    // align-items: center
    // letter-spacing: 1em
    // line-height: 1.75em
.discount
    width: 100%
    // height: 35px
    display: flex
    justify-content: space-between
    align-items: center
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    color: #fff
    margin: 10px 0
.discount__mark, .discount__persent
    background-color: red
    padding: 0 10px
    border-radius: 10px
    text-align: center
.product__link
    width: 100%
    height: 150px
    display: flex
    justify-content: center
    align-items: center
.product__price
    width: 90%
    text-align: center
    font-size: 1.1em
    font-weight: bold
.product__description
    width: 100%
    height: 70px
    margin-top: 10px
.with-discount
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    background-color: red
    border-radius: 5px
    color: #fff

</style>