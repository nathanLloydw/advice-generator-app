<template>
  <div class="w-[92%] mt-[-103px] md:mt-0 md:w-[70%] lg:w-[37%] h-[50%] lg:h-[41%] bg-dark-grayish-blue rounded-xl text-light-cyan flex flex-col justify-between">
    <p class="w-full text-center text-neon-green text-xs md:text-sm pt-12 pb-5 tracking-[0.2rem]">ADVICE #{{ this.advice_id }}</p>
    <h1 class="w-full text-center text-2xl md:text-xl lg:text-2xl xl:text-3xl font-medium px-8 md:px-12 leading-tight pb-6">
      "{{this.advice_text}}"
    </h1>
    <img class="m-auto max-w-[82%] hidden md:block" src="public/images/pattern-divider-desktop.svg">
    <img class="m-auto max-w-[82%] block md:hidden" src="public/images/pattern-divider-mobile.svg">
    <div class="m-auto w-16 h-16 mb-[-30px] bg-neon-green rounded-full flex justify-center items-center hover:shadow-green-button" @click="this.generate_advice">
      <img src="public/images/icon-dice.svg">
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "advice-block",
  data()
  {
    return{
      advice_id:'117',
      advice_text:"It is easy to sit up and take notice, what's difficult is getting up and taking action."
    }
  },
  methods:
  {
    generate_advice()
    {
      console.log('generating advice');

      axios.get("https://api.adviceslip.com/advice")
      .then((res) =>
      {
        let advice = res.data.slip;
        this.advice_id = advice.id;
        this.advice_text = advice.advice;
      });

    }
  }
}
</script>

<style scoped>

</style>