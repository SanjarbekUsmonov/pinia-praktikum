import {defineStore} from 'pinia'

export const useCardStore = defineStore('cardSstore',{
    state: ()=> ({
        cards:[
            {id:1,Chegirma:"Chegirma",foiz:"17%",
            src:"https://olcha.uz/image/425x425/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
            telefon:"Smartphone",narx:"500.000 so'm",som:"450.000 so'm",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
          ],
          name:"Hello pinia"
    })
})