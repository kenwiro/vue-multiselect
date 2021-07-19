<template>
  <div
    v-if="options.length"
    class="multiselect__content"
  >
    <OptionsList
      v-for="(optionGroup, index) in options"
      :key="index"
      :option-group="optionGroup"
      :selected-option="selectedOption"
      @select="setOption"
    />
  </div>
  <div
    v-else
    class="multiselect__content"
  >
    <p>Ничего не найдено</p>
  </div>
</template>

<script>

import OptionsList from '../OptionsList/OptionsList';

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    }
  },
  components: {
    OptionsList
  },
  methods: {
    setOption(option) {
      this.$emit('select', option);
    },
    unFocus() {
      this.$emit('unFocus', false);
    }
  },
  mounted() {
    window.addEventListener('click', this.unFocus);
  },
  beforeUnmount() {
    window.removeEventListener('click', this.unFocus);
  }
};
</script>
