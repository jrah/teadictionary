<template>
  <section>

<div class="ph5-ns ph4 pv4">
  <div class="mwc center">
    <h1>Tea Dictionary</h1>
      <div class="grid-layout">
        <span v-for="(tea, index) in teas" :key="index" :name=" '' + index " class="grid-item cover bg-center pointer white" v-bind:style="[ tea.image ? { 'background-image': 'url(' + tea.image + ')' } : { 'background-color': '#25324e' } ]">
          <button type="button" @click="showModal">Open Modal</button>
          <modal
            v-show="isModalVisible"
            @close="closeModal">
            <h2 slot="title">{{tea.title}}</h2>
          </modal>
          <h2  class="f3">{{tea.title}}</h2>
          <!-- <img v-if="tea.image" class="work-thumb" sizes="100vw" :src="tea.image" @error="imageLoadError($event)"> -->
        </span>
      </div>
  </div>
</div>

  </section>
</template>

<script>
import modal from '~/components/Modal.vue';
export default {
  components: {
    modal
   },
  async asyncData({ app }) {
    return {
      teas: await app.$content('./teas').getAll()
    }
  },
  methods: {
    imageLoadError () {
      console.log(this + 'Image failed to load');
    },
    showModal () {
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }
  },
  data () {
    return {
      isModalVisible: false
    }
  }
}
</script>



<style scoped lang="scss">
@import "assets/scss/mixins";
@import "./node_modules/tachyons-sass/scss/variables";
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(180px, auto);
    grid-auto-flow: dense;
    padding: 10px;
    transition: all 1s;
}

.grid-item {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.span-2 {
    grid-column-end: span 2;
    grid-row-end: span 2;
}

.span-3 {
    grid-column-end: span 3;
    grid-row-end: span 4;
}

</style>
