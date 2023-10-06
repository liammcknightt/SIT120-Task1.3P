<template>
  <div class="designsandtasks">
    <h1 style="font-size:60px; text-align:center;">Designs and Tasks</h1>
  </div>
  <div class="button">
    <button v-on:click="goBack">
      Back
    </button>
  </div>
  <div class="center">
    <img class="img1" src="@/assets/1.png" alt="Task 1.1P">
    <h2>Task 1.1P</h2>
    <p style="font-size:20px;">
      Task 1.1P is an introduction into responsive web apps using HTML and CSS. The requirements consist of using 5 basic HTML tags including, an image, table, form etc.
      Once a basic web page is established using HTML, CSS is then used to style the page. The task required the use of inline styles, internal styles and external styles.
    </p>
  </div>

  <hr/>

  <div class="center">
    <img class="img2" src="@/assets/2.png" alt="Task 1.2P">
    <h2>Task 1.2P</h2>
    <p style="font-size:20px;">
      Task 1.2P introduces a new tool, JavaScript Concepts, which can be used within a HTML/CSS built web page to manipulate data, work with arrays, dates and even create functions.
      Some of the methods are shown in the image.
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
