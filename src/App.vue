<template>
  <div class="app">
    <div class="container">
      <Multiselect
        label="Выбрать сервис"
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
      bar: 1,
      data: [
        {
          header: null,
          items: [
            {
              value: 'Не привязывать ни к какому сервису'
            },
            {
              value: 'Хостинг'
            }
          ]
        },
        {
          header: 'Спектр',
          items: [
            {
              value: 'Мой сайт на 1С-Битрикс!'
            },
            {
              value: 'Мой сайт на Joomla!'
            },
            {
              value: 'Другой мой сайт на Joomla!'
            }
          ]
        },
        {
          header: 'VPS',
          items: [
            {
              value: 'Мой сайт'
            },
            {
              value: 'Прокси-сервер'
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
