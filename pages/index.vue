<template>
  <section>

<div class="ph5-ns ph4 pv4">
  <div class="mwc center">
    <h1>Tea Dictionary</h1>
      <div class="grid-layout">
        <div v-for="(tea, index) in teas" :key="index" :name=" '' + index " @click="showModal(tea)" class="grid-item cover bg-center pointer white" v-bind:style="[ tea.image ? { 'background-image': 'url(' + tea.image + ')' } : { 'background-color': '#25324e' } ]">
          <!-- <button type="button" @click="showModal(tea)">Open Modal</button> -->
          <h2  class="f3">{{tea.title}}</h2>
          <!-- <img v-if="tea.image" class="work-thumb" sizes="100vw" :src="tea.image" @error="imageLoadError($event)"> -->
        </div>
        <modal
          v-show="isModalVisible"
          @close="closeModal">
          <h2 slot="title">{{selectedTea.title}}</h2>
          <p slot="body">{{selectedTea.copy}}</p>
        </modal>
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
      teas: await app.$content('./teas').getAll(),
      selectedTea: {}
    }
  },
  methods: {
    imageLoadError () {
      console.log(this + 'Image failed to load');
    },
    showModal (tea) {
      this.isModalVisible = true;
      this.selectedTea = tea;
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
