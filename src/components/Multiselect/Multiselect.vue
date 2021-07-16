<template>
    <div :class="multiselectClasses">
      <div class="multiselect__select"><i class="multiselect__select__icon" @click="unFocus"></i></div>
      <div class="multiselect__tags">
        <label class="multiselect__tags__label">
          <span class="multiselect__tags__label__text">{{ label }}</span>
          <input
            class="multiselect__tags__input"
            type="text"
            v-model="value"
            :disabled="selectedOption !== null"
            @focus="setFocus"
          >
          <span
            class="multiselect__tags__selected__text"
            v-if="selectedOption"
            @click="selectedOption = null"
          >{{ this.selectedOption }}</span>
        </label>
      </div>
      <div class="multiselect__content" v-if="filteredOptions.length">
        <OptionsList
          v-for="(optionGroup, index) in filteredOptions"
          :key="index"
          :option-group="optionGroup"
          :selected-option="selectedOption"
          @select="setOption"
        />
      </div>
      <div class="multiselect__content" v-else>
        <p>Ничего не найдено</p>
      </div>
    </div>
</template>

<script>

import OptionsList from './OptionsList/OptionsList';
export default {
  props: {
    label: String,
    options: Array
  },
  components: {
    OptionsList
  },
  data() {
    return {
      value: '',
      selectedOption: null,
      isFocused: false
    };
  },
  methods: {
    setFocus() {
      this.isFocused = true;
    },
    unFocus() {
      this.isFocused = false;
    },
    setOption(option) {
      this.selectedOption = option;
      this.value = '';
    }
  },
  computed: {
    filteredOptions() {
      return this.value === ''
        ? this.options
        : this.options
          .filter(optGr => optGr.items.some(option => option.value.toLowerCase().includes(this.value.toLowerCase())))
          .map(optGr => {
            return {
              header: optGr.header,
              items: optGr.items.filter(option => option.value.toLowerCase().includes(this.value.toLowerCase()))
            };
          });
    },
    multiselectClasses() {
      return {
        'multiselect': true,
        'multiselect--active': this.isFocused
      };
    }
  }
};
</script>

<style lang="scss">

  $box_shadow: 4px 4px 17px 1px rgba(34, 60, 80, 0.2);
  $unTarget_color: #d2d2d2;
  $target_color: #98ff87;

  .multiselect {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    width: 100%;
    position: relative;
    &__select {
      width: 20px;
      height: 56px;
      right: 0;
      display: flex;
      align-items: center;
      position: absolute;
      &__icon {
        left: 3px;
        top: 4px;
        width: 5px;
        height: 5px;
        border-radius: 1px;
        border-left: 2px solid #a8a8a8;
        border-bottom: 2px solid #a8a8a8;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        cursor: pointer;
        z-index: 999;
        user-select: none;
        .multiselect--active & {
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          -ms-transform: rotate(135deg);
          transform: rotate(135deg);
        }
      }
    }
    &__tags {
      width: 100%;
      height: 100%;
      &__label {
        height: 100%;
        width: 100%;
        position: relative;
        display: inline-block;
        &__text {
          position: absolute;
          padding-top: 8px;
          padding-left: 16px;
          font-size: 12px;
          color: #9e9e9e;
        }
      }
      &__input {
        width: 552px;
        height: 36px;
        background-color: transparent;
        padding: 18px 25px 0 16px;
        font-size: 18px;
        border: 1px solid $unTarget_color;
        border-radius: 8px;
        .multiselect--active & {
          border: 1px solid $target_color;
          border-radius: 8px;
          box-shadow: 0px 0px 1px 4px rgba(152, 255, 135, 0.2);
        }
      }
      &__selected {
        &__text {
          width: 100%;
          text-align: left;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 18px;
          padding: 18px 25px 8px 16px;
        }
      }
    }
    &__content {
      width: 100%;
      max-height: 200px;
      overflow: auto;
      border-radius: 8px;
      margin-top: 10px;
      background-color: #fff;
      position: absolute;
      box-shadow: $box_shadow;
      display: none;
      .multiselect--active & {
        display: block;
      }
      &__list {
        padding: 0;
        margin: 16px 0 0 0;
        width: 100%;
        text-align: left;
        border-bottom: 1px solid $unTarget_color;
        &:last-child {
          border-bottom: none;
        }
        &:first-child {
          margin-top: 0;
        }
        &__header {
          padding: 0 0 0 16px;
          font-weight: bold;
          &__text {
            display: inline-block;
          }
        }
        &__item {
          margin: 8px;
          list-style-type: none;
          border-radius: 4px;
          cursor: pointer;
          &--selected {
            background-color: $unTarget_color;
          }
          &:hover {
            background-color: $unTarget_color;
          }
          &__text {
            display: inline-block;
            padding: 13px;
          }
        }
      }
    }
  }
</style>
