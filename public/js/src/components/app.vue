<template>
  <div class="message">Message: {{ msg }}</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'A test message!'
      }
    }
  }
</script>

<style>
  .message {
    color: blue;
  }
</style>
