<template>
  <div class="mm-text-field">
    <input type="text">
    <label for="">Campo de texto</label>
    <span>Helper text</span>
  </div>
</template>

<script>
  import 'mm-text-field/src/styles/mm-text-field.css';
  import mmTextField from 'mm-text-field';

  export default {
    mounted: function () {
      mmTextField();
    }
  }
</script>
