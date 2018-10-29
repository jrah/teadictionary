<template>

<div class="content">
  <header>

    <div class="cover bg-center pv6 relative flex items-center bg-navy" style="background-image:url('https://source.unsplash.com/XmTZmASn3Dc')">
      <div class="mwc ph5-ns ph4 pv3 z-2 relative">
        <div class="white w-33-l">
          <h1 class="mt0 f1 mb2 fw8 lh-title">{{home.title}}</h1>
          <p class="lh-copy ma0 z-1 fw8">{{home.intro}}</p>
        </div>
      </div>
      <div class="overlay absolute db top-0 left-0 bottom-0 right-0 z-1" style="background-image: linear-gradient(205deg,rgba(37, 37, 37, 0.23), rgba(10, 10, 10, 0.72));"></div>
    </div>

  </header>

  <section class="ph5-ns ph4 pt5 pb4">
    <div class="mwc">
      <div class="mw7 center tc navy">
        <h1 class="lh-solid mt0 mb3 f2 fw8">{{home.splash.title}}</h1>
        <p class="lh-copy ma0 f4">{{home.splash.text}}</p>
      </div>
    </div>
  </section>

  <div class="relative ph5-ns ph4 bg-bottom-l vh-100 cover" :style="{ backgroundImage: `url(${gridBackground})` }">

    <div class="mwc center">
      <section class="grid-layout pb6">

        <div v-for="(tea, index) in teas" :key="index" :name=" '' + index " @click="showModal(tea)" class="grid-item pointer relative bg-white">
          <span class="absolute top-0 left-0" :class="'bg-'+tea.color" style="width: 10px; height:10px; z-index: 2;"></span>

          <div class="pa3">
            <h2 class="f2 mt0 mb2">{{tea.title}}</h2>
            <div class="absolute bottom-2 flex items-center" :class="tea.color">
              <p class="ma0 fw8 mr2">Read more</p>
              <no-ssr>
                <v-icon name="arrow-right" />
              </no-ssr>
            </div>
          </div>

          <div class="hide-child">
            <span class="cover bg-center h-100 w-100 absolute top-0 right-0 left-0 child br3" v-bind:style="[ tea.image ? { 'background-image': 'url(' + tea.image + ')' } : { 'background-color': 'transparent' } ]"></span>
          </div>

        </div>

        <div class="grid-item relative bg-white">
          <span class="absolute top-0 left-0 bg-silver" style="width: 10px; height:10px; z-index: 2;"></span>
          <div class="pa3 silver">
            <h2 class="f2 mt0 mb2">More teas?</h2>
            <div class="absolute bottom-2 flex items-center">
              <p class="ma0 fw8 mr2">Coming soon...</p>
            </div>
          </div>
        </div>

      </section>
    </div>

    <section>

      <modal v-show="isModalVisible" @close="closeModal" class="z-5">
        <div slot="title" class="flex justify-center">
          <h2 class=" lh-title mt0 mb2 pb1 bw2 bb b--blue dib f2 tc underline-skip">{{selectedTea.title}}</h2>
        </div>
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
          <button class="snipcart-add-item ttu tc f7 fw8 no-underline pv3 ph3 dib pointer bn bg-blue near-white bg-animate  hover-bg-blue br2" v-bind:data-item-id="'td-' + uglifyTitle" v-bind:data-item-name="selectedTea.title" v-bind:data-item-price="selectedTea.price" data-item-url="/">Add to cart</button>
        </div>
      </modal>

    </section>

  </div>

  <section class="relative overflow-hidden">

    <div class="bg-washed-blue ph5-ns ph4 pb4">
      <div class="mwc">
        <div class="mw7 center tc near-white">
          <h1 class="lh-solid mt0 mb3 f2 fw8">{{home.contact.title}}</h1>
          <p class="lh-copy ma0 f4">{{home.contact.text}}</p>
        </div>
      </div>
    </div>

    <div class="flex-ns justify-center footerBg-half near-black">
      <div class="bg-white br2-ns z-2 relative pa4" style="box-shadow: 0px 0px 8px 2px rgba(208, 208, 208, 0.12);">
        <div class="flex-l justify-between">

          <post class="w-50-l" />

          <div class="w-40-l">
            <h2 class="lh-title f3 mt0-ns dib pb1">Don't see a tea you like?</h2>
            <div v-for="(point, index) in home.contact.points" v-bind:key="`keyword-${index}`" class="flex items-center mb3">
              <div class="mr3">
                <no-ssr>
                  <v-icon :name="point.icon" class="dark-blue" scale="2" />
                </no-ssr>
              </div>
              <div v-html="$md.render(point.paragraph)"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</div>

</template>

<script>
import modal from '~/components/Modal.vue';
import post from '~/components/Post.vue';
import gridBackground from '~/assets/images/cheese.svg'
import home from '~/content/home.json'
import site from '~/content/site.json'

export default {
  components: {
    modal,
    post
  },
  data() {
    return {
      title: 'Tea Dictionary',
      gridBackground,
      isModalVisible: false,
      home,
      test: "# Hello World",
      model: '# Hello World!',
      site
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
    },
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

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10em, 15em));
    @include mq(l) {
        grid-template-columns: repeat(4, minmax(15em, 10em));
    }
    grid-gap: 1em;
    grid-auto-rows: minmax(15em, auto);
    grid-auto-flow: dense;
    // padding: 10px;
    transition: all 1s;
    justify-content: center;
}

.grid-item {
    border-radius: 0.5rem;
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

.footerBg-half {
    position: relative;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 60%;
        background-color: $washed-blue;
    }
}
</style>
