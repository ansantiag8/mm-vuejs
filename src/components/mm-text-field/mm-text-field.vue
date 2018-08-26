<template>
  <div class="mm-text-field">
    <input
      v-bind:class="{
        'mm-input-error': classInput.mmInputError,
        'mm-input-not-empty': classInput.mmInputNotEmpty,
        'mm-input-touched': classInput.mmInputTouched,
      }"
      v-bind:type="type"
      v-on:blur="eventBlur"
      v-on:focus="eventFocus"
      v-on:keyup="eventKeyup"
      :required="required"
    >
    <label for="">{{ label }}</label>
    <span>Helper text</span>
  </div>
</template>

<script>
  import mmTextField from 'mm-text-field';

  import eventBlur from './events/eventBlur'
  import eventFocus from './events/eventFocus'
  import eventKeyup from './events/eventKeyup'

  export default {
    data: function () {
      return {
        classInput: {
          mmInputError: false,
          mmInputNotEmpty: false,
          mmInputTouched: false,
        }
      };
    },
    methods: {
      eventBlur,
      eventFocus,
      eventKeyup,
    },
    props: {
      label: {
        type: String,
        default: 'Campo',
      },
      required: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'text',
      }
    },
    mounted: function () {
      mmTextField();
    }
  }
</script>
