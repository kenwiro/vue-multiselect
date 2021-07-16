<template>
  <li
    tabindex="0"
    :class="itemClasses"
    @click="selectOption"
    @keypress.enter="selectOption"
    @focus="setFocus"
    @blur="unFocus"
  >
    <span class="multiselect__content__list__item__text">{{ optionValue }}</span>
  </li>
</template>

<script>
export default {
  props: {
    optionValue: String,
    isSelected: Boolean
  },
  data() {
    return {
      isFocused: false
    };
  },
  methods: {
    selectOption() {
      this.toggleFocus();
      if(this.isSelected) {
        return this.$emit('select', null);
      }
      this.$emit('select', this.optionValue);
    },
    toggleFocus() {
      this.isFocused = !this.isFocused;
    },
    setFocus() {
      this.isFocused = true;
    },
    unFocus() {
      this.isFocused = false;
    },
  },
  computed: {
    itemClasses() {
      return {
        'multiselect__content__list__item': true,
        'multiselect__content__list__item--selected': this.isSelected,
        'multiselect__content__list__item--focused': this.isFocused,
      };
    }
  }
};
</script>
