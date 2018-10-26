<template>

  <!-- <div class="bg-white pa3">
    <form name="contact" action="" method="post" netlify-honeypot="bot-field" netlify>
      <input type="hidden" name="contact" value="contact" />
      <p style="display: none;">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <label class="db fw8" for="name">
        Name:
      </label>
      <input class="db" name="name" id="name" />

      <label class="db fw8" for="email">
        Email:
      </label>
      <input class="db" name="email" id="email" />

      <label class="db fw8" for="message">
        Message:
      </label>
      <textarea class="db" name="message" id="message"></textarea>
      <input class="f5 link pv2 ph4 bg-dark-blue bn white br2 fw8 pointer bg-animate hover-bg-bluer" type="submit" value="Submit" />
    </form>
  </div> -->


      <form name="contact" action="" method="post" netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="contact" value="contact" />
        <p style="display: none;">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <div class="form-group mb3">
          <label for="f_name" class="near-black lh-copy db mb1">Your name</label>
          <input type="text" name="f_name" class="input-focus w-100 dib ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white">
        </div>
        <div class="form-group  mb3">
          <label for="email" class="near-black lh-copy db mb1">Email</label>
          <input type="text" name="email" class="input-focus w-100 dib ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white">
        </div>
        <div class="form-group  mb3">
          <label for="message" class="near-black lh-copy db mb1">Message:</label>
          <textarea name="message" class="input-focus w-100 ba b--light-gray pa2 input-reset ba br1 outline-0 bg-near-white bg-animate hover-bg-white h4"></textarea>
        </div>
        <div class="flex justify-end">
          <input class="f5 link pv2 ph3 bg-dark-blue bn white br2 fw8 pointer bg-animate hover-bg-blue"  type="submit" value="Submit"/>
        </div>
      </form>

</template>
<script>
export default {
  name: "form",
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      defaultPanelist: 'Evan You'
    }
  },
}
</script>
