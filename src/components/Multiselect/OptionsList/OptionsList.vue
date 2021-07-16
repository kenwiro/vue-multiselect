<template>
  <ul class="multiselect__content__list">
    <li
      v-if="optionGroup.header !== null"
      class="multiselect__content__list__header"
    >
      <span class="multiselect__content__list__header__text">{{ optionGroup.header }}</span>
    </li>
    <Option
      v-for="option in optionGroup.items"
      :key="option.value"
      :option-value="option.value"
      :is-selected="selectedOption === option.value"
      @select="selectOption"
    />
  </ul>
</template>

<script>

import Option from './Option/Option';

export default {
  props: {
    optionGroup: Object,
    selectedOption: String
  },
  components: { Option },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
    }
  }
};
</script>
