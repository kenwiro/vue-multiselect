<template>
  <div class="app">
    <div class="container">
      <Multiselect
        label="Choose the option"
        :options="data"
      />
    </div>
  </div>
</template>

<script>

import Multiselect from './components/Multiselect/Multiselect';

export default {
  components: { Multiselect },
  data() {
    return {
      data: [
        {
          header: null,
          items: [
            {
              value: 'Option 0.1'
            },
            {
              value: 'Option 0.2'
            }
          ]
        },
        {
          header: 'Option 1',
          items: [
            {
              value: 'Option 1.1'
            },
            {
              value: 'Option 1.2'
            },
            {
              value: 'Option 1.3'
            }
          ]
        },
        {
          header: 'Option 2',
          items: [
            {
              value: 'Option 2.1'
            },
            {
              value: 'Option 2.2'
            }
          ]
        }
      ]
    };
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  .app {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .container {
    margin-top: 30px;
  }
</style>
