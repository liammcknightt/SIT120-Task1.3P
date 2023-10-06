<template>
    <div class="about">
        <h1 style="font-size:60px; text-align:center;">About Me</h1>
    </div>
    <div class="button">
    <button v-on:click="goBack">
      Back
    </button>
  </div>
    <div class="center">
        <p style="font-size:20px;">
            I am an aspiring student studying a Bachelor of Computer Science and constantly developing my skills in a wide variety of areas within this field. My end goal is to
            complete a minor in Full Stack Development to increase my opportunities when looking for a job/career. This unit, Introduction to Responsive Web Apps, contains great
            knowledge in adding to my qualification, not only for web development, but just understanding how web pages work. I am currently working full time in an IT Support position
            which allows me to gain experience in the work place whilst I study. This portfolio shows my work and understanding of the core topics of this unit and my ability to apply
            them and create basic responsive web apps.
        </p>
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
