<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal relative bg-near-black near-white br2">

        <button @click="$emit('close')" class="bg-transparent near-white bn pointer absolute top-0 right-0 ma3 outline-0">
          <no-ssr>
            <v-icon name="window-close" scale="2"/>
          </no-ssr>
        </button>

        <slot name="title">
          <h2>Default Heading</h2>
        </slot>
        <slot name="description">
          I'm the default body!
        </slot>
        <slot name="keywords"></slot>
        <slot name="ingredients"></slot>
        <slot name="notes"></slot>
        <slot name="guide"></slot>
        <slot name="image"></slot>
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
    width: 80%;
    height: 80%;
    padding: 3rem;
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
