<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal relative bg-white near-black br2">

        <button @click="$emit('close')" class="bg-transparent near-black bn pointer absolute top-0 right-0 ma3 outline-0">
          <no-ssr>
            <v-icon name="window-close" scale="2"/>
          </no-ssr>
        </button>
        <slot name="title">
          <h2>Default Heading</h2>
        </slot>
        <div class="flex-ns justify-between">
          <div class="w-30-ns">
            <slot name="image"></slot>
            <slot name="button"></slot>
          </div>
          <div class="w-60-ns">
            <slot name="description"></slot>
            <slot name="notes"></slot>
            <slot name="guide"></slot>
            <slot name="ingredients"></slot>
            <slot name="keywords"></slot>
          </div>
        </div>

</div>


      </div>
  </transition>
</template>


<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
      modalError () {
        console.log(this);
      },
    },

  };
</script>

<style lang="scss" scoped>
@import "./node_modules/tachyons-sass/scss/variables";
@import "assets/scss/mixins";
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    height: 100%;
    padding: 3rem;
    overflow-y: auto;
  }


  .modal-fade-enter,
   .modal-fade-leave-active {
     opacity: 0;
   }

   .modal-fade-enter-active,
   .modal-fade-leave-active {
     transition: opacity .5s ease
   }

</style>
