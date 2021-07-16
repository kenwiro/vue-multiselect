<template>
  <li
    tabindex="0"
    :class="itemClasses"
    @click="selectOption"
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
  methods: {
    selectOption() {
      this.$emit('select', this.optionValue);
    }
  },
  computed: {
    itemClasses() {
      return {
        'multiselect__content__list__item': true,
        'multiselect__content__list__item--selected': this.isSelected
      };
    }
  }
};
</script>
