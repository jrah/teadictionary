<template>
  <section>

<div class="ph5-ns ph4 pv3 bg-near-white">
  <div class="h1 w4">
    <img src="~assets/images/logo.svg" alt="Logo">
  </div>
  <div class="mwc center">
    <div class="mw7 center tc mwc ph5-ns ph4 pb5-ns pt4  mb5 mb0-ns">
      <h1 class="mt0 f2 mb3 lh-title">Tea Dictionary</h1>
      <p class="lh-copy ma0">Artisan loose leaf tea curators DiversiTea in collaboration with the famous South Korean speciality kitchen KOPAN have worked to curate four different types of amazing teas that compliment and reflect the characteristics of Korean cuisine.</p>
    </div>
    <div class="relative">
      <div class="grid-layout bg-white pv3 mh3 absolute left-0 right-0" style="top: -3rem;">
        <div v-for="(tea, index) in teas" :key="index" :name=" '' + index " @click="showModal(tea)" class="grid-item cover bg-center pointer white grow" v-bind:style="[ tea.image ? { 'background-image': 'url(' + tea.image + ')' } : { 'background-color': '#25324e' } ]">

          <h2  class="f3 tc">{{tea.title}}</h2>
          <!-- <img v-if="tea.image" class="work-thumb" sizes="100vw" :src="tea.image" @error="imageLoadError($event)"> -->
        </div>
        <modal
          v-show="isModalVisible"
          @close="closeModal">
            <h2 slot="title" class="f1 fw8 mt0 lh-title">{{selectedTea.title}}</h2>
              <div slot="image" v-if="selectedTea.image" class="mb3">
                <img :src="selectedTea.image" alt="selectedTea.image">
              </div>
              <div slot="ingredients">
                <h3 class="bb b--blue lh-title  mt0 mb2 dib pb1 bw2">Ingredients</h3>
                <p class="mt0 lh-copy">{{selectedTea.ingredients}}</p>
              </div>
                <div slot="description">
                  <h3 class="bb b--blue lh-title  mt0 mb2 dib pb1 bw2">Description</h3>
                  <p class="mt0 lh-copy">{{selectedTea.description}}</p>
                </div>
                <div slot="notes">
                  <h3 class="bb b--blue lh-title  mt0 mb2 dib pb1 bw2">Notes</h3>
                  <p class="mt0 lh-copy">{{selectedTea.notes}}</p>
                </div>
                <div slot="guide">
                  <h3 class="bb b--blue lh-title mt0 mb2 dib pb1 bw2">Guide</h3>
                  <p class="mt0 lh-copy">{{selectedTea.guide}}</p>
                </div>
                <div slot="keywords">
                  <ul class="pa0 ma0 list">
                    <li v-for="(keyword, index) in keywordSplit" v-bind:key="`keyword-${index}`" class="dib pa2 bg-blue br1 mr2 near-white">{{keyword}}</li>
                  </ul>
                </div>
                <div slot="button" class="flex items-center justify-center">
                  <button
                  class="snipcart-add-item ttu tc f7 fw8 no-underline pv3 ph3 dib pointer bn bg-blue near-white bg-animate  hover-bg-blue br2"
                  v-bind:data-item-id="'td-' + uglifyTitle"
                  v-bind:data-item-name="'TD ' + selectedTea.title"
                  v-bind:data-item-price="selectedTea.price"
                  data-item-url="/"
                  v-bind:data-item-description="selectedTea.description">
                    Add to cart
                  </button>
                </div>
        </modal>
      </div>
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
  data () {
    return {
      title: 'Tea Dictionary'
    }
  },
  async asyncData({ app }) {
    return {
      teas: await app.$content('./teas').getAll(),
      selectedTea: {

      }
    }
  },
  computed: {
    keywordSplit: function() {
      return (this.selectedTea.keywords || "").split("\, ");
    },
    uglifyTitle: function () {
      return console.log('Uglify Title')
      // return (this.selectedTea.title.replace(/\s+/g, '-').toLowerCase());
      // return console.log(this.selectedTea.title.replace(/\s+/g, '-').toLowerCase());
    }
  },
  methods: {
    imageLoadError () {
      console.log(this + 'Image failed to load');
    },
    showModal (tea) {
      this.isModalVisible = true;
      this.selectedTea = tea;
      console.log(this.selectedTea.title.replace(/\s+/g, '-').toLowerCase());

    },
    closeModal () {
      this.isModalVisible = false;
    },
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
@import "assets/scss/variables";
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: .75em;
    grid-auto-rows: minmax(10em, auto);
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
