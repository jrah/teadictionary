<template>
    <div class="modal-backdrop">
      <div class="modal">
        <slot name="header">
          <h2>Default Heading</h2>
          <button
            type="button"
            class="bg-green white di outline-0 bn"
             @click="$emit('close')"
             @error="modalError()"
            >
             Close
          </button>
        </slot>

        <slot name="body">
          I'm the default body!
        </slot>

        <slot name="footer">

        </slot>
      </div>
    </div>
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

<style lang="scss">
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
    background: $white;
    color: $black;
    width: 80%;
    height: 80%;
    padding: 3rem;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
