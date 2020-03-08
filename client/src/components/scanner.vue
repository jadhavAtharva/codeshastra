<template>
  <div id="temp">
    <p class="error">{{ error }}</p>
     <p class="decode-result">Last result: 
       <b>{{ result }}</b></p>
    <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import {mapActions} from 'vuex'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    ...mapActions(['addData']),
    onDecode (result) {
    this.result=result
    console.log(result)
    this.addData(result)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

#dis {
  padding-top: 400px;
}
#temp {
  width: 400px;
  height: 400px;
}
</style>