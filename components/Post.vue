<template>

      <form name="contact" action="" method="post" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p style="display: none;">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>

        <div class="form-group mb3">
          <label for="name" class="near-black lh-copy db mb1">Your name</label>
          <input type="text" v-model="name" name="name"  data-vv-name="name" v-validate="'required'" class="input-focus w-100 dib ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white">
          <p v-show="errors.has('name')" class="bg-red white f7 w-100 pa2 fw8 db mv0">{{errors.first('name')}}</p>
        </div>


        <div class="flex flex-column mb3">

          <label for="email" class="near-black lh-copy db mb1">Email</label>
          <input type="text" v-validate="'email|required'" data-vv-as="email" name="email" class="input-focus w-100 dib ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white">
          <p v-show="errors.has('email')" class="bg-red white f7 w-100 pa2 fw8 db mv0">{{errors.first('email')}}</p>
        </div>


        <div class="form-group  mb3">
          <label for="message" class="near-black lh-copy db mb1">Message:</label>
          <textarea name="message" v-validate="'required'" data-vv-as="message" class="input-focus w-100 ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white h4 ma0" style="vertical-align: top;"></textarea>
          <p v-show="errors.has('message')" class="bg-red white f7 w-100 pa2 fw8 db mv0">{{errors.first('message')}}</p>
        </div>
        <div class="flex justify-end">
          <input @click="submit" class="f5 link pv2 ph3 bg-dark-blue bn white br2 fw8 pointer bg-animate hover-bg-blue"  type="submit" value="Submit"/>
        </div>

      </form>

</template>
<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  // name: "form",
  data () {
    return {
      name: '',
      email: '',
      select: null
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>
