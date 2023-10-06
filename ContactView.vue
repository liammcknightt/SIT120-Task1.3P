<template>
    <div class="contact">
        <h1 style="font-size:60px; text-align:center;">Contact Me</h1>
    </div>
    <div class="button">
    <button v-on:click="goBack">
      Back
    </button>
  </div>
    <div class="center">
        <h3>Name: Liam McKnight</h3>
        <h3>Deakin Student #221508729</h3>
        <h3>Phone #0449757657</h3>
        <h3>Email: lmcknight@deakin.edu.au</h3>
        <button onclick="copyEmail()">Copy Email</button>
        <button onclick="copyNumber()">Copy Number</button>
    </div>
  </template>
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
  </script>
