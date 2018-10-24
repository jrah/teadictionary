<template>
<div>

<div class="absolute top-0 left-0 right-0 z-5 w-100">
  <div class="mwc ph5-ns ph4 pv3 flex items-center justify-between">
      <img src="~assets/images/logo.svg" class="w4 white" alt="Logo">
      <nav>
        <a href="/" class="white no-underline fw8">Link</a>
        <a href="/" class="white no-underline fw8">Link</a>
        <a href="/" class="white no-underline fw8">Link</a>
      </nav>
  </div>
</div>
  <div class="cover bg-center vh-75 relative flex items-center bg-navy" style="background-image:url('https://source.unsplash.com/XmTZmASn3Dc')">
    <div class="mwc ph5-ns ph4 pv3 z-2 relative">
      <div  class="white w-33-l">
          <h1 class="mt0 f1 mb2 fw8 lh-title">Tea Dictionary</h1>
          <p class="lh-copy ma0 z-1 fw8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illum, aut illo omnis ipsum minus laborum, voluptates odio eum quas animi deserunt, assumenda ducimus nam!</p>
      </div>
    </div>
    <div class="overlay absolute db top-0 left-0 bottom-0 right-0 z-1" style="background-image: linear-gradient(205deg,rgba(37, 37, 37, 0.23), rgba(10, 10, 10, 0.72));"></div>
  </div>


<div>

  <div class="relative ph5-ns ph4 cover" :style="{ backgroundImage: `url(${gridBackground})` }">
    <div class="mwc center flex justify-center">
      <section class="grid-layout">
        <div v-for="(tea, index) in teas" :key="index" :name=" '' + index " @click="showModal(tea)" class="grid-item pointer relative">
          <span class="absolute top-0 left-0 bg-navy" style="width: 5px; height:5px; z-index: 2;"></span>
          <div>
            <h2 class="f3">{{tea.title}}</h2>
            <p>Read more</p>
          </div>
          <div class="hide-child">
            <span class="cover bg-center h-100 w-100 absolute top-0 right-0 left-0 child" v-bind:style="[ tea.image ? { 'background-image': 'url(' + tea.image + ')' } : { 'background-color': '#25324e' } ]"></span>
          </div>
        </div>
      </section>
    </div>

    <section>

      <modal v-show="isModalVisible" @close="closeModal" class="z-3">
        <h2 slot="title" class="bb b--blue lh-title mt0 mb2 dib pb1 bw2 f2">{{selectedTea.title}}</h2>
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
        <div slot="button">
          <button class="snipcart-add-item ttu tc f7 fw8 no-underline pv3 ph3 dib pointer bn bg-blue near-white bg-animate  hover-bg-blue br2" v-bind:data-item-id="'td-' + uglifyTitle" v-bind:data-item-name="selectedTea.title" v-bind:data-item-price="selectedTea.price"
            data-item-url="/">Add to cart
                  </button>
        </div>
      </modal>

    </section>
  </div>

</div>

</div>
</template>

<script>
import modal from '~/components/Modal.vue';
import gridBackground from '~/assets/images/dalmatian.svg'
export default {
  components: {
    modal
  },
  data() {
    return {
      title: 'Tea Dictionary',
      gridBackground,
      isModalVisible: false
    }
  },
  async asyncData({
    app
  }) {
    return {
      teas: await app.$content('./teas').getAll(),
      selectedTea: {
        title: ''
      }
    }
  },
  computed: {
    keywordSplit: function() {
      return (this.selectedTea.keywords || "").split("\, ");
    },
    uglifyTitle: function() {
      return (this.selectedTea.title.replace(/\s+/g, '-').toLowerCase());
    }
  },
  methods: {
    imageLoadError() {
      console.log(this + 'Image failed to load');
    },
    showModal(tea) {
      this.isModalVisible = true;
      this.selectedTea = tea;
      console.log(this.selectedTea.title.replace(/\s+/g, '-').toLowerCase());

    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>



<style scoped lang="scss">
@import "assets/scss/mixins";
@import "assets/scss/variables";

.bg-dalmatian {
  background-image: url('~assets/images/logo.svg');
  background-size: cover;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10em, 15em));
    @include mq(l) {
        grid-template-columns: repeat(4, minmax(15em, 10em));
    }
    // grid-gap: 1em;
    grid-auto-rows: minmax(15em, auto);
    grid-auto-flow: dense;
    // padding: 10px;
    transition: all 1s;
}

.grid-item {
    // border-radius: 5px;
    display: flex;
    justify-content: start;
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
