<template>
  <div class="channel">
    <h1>This is an about page</h1>
    <button @click="bClick(hello)">버튼5</button>
    <button @click="bClick(10)">버튼6</button>
  </div>
</template>
<script>
import backend from '@/assets/backend'

export default {
  name: 'WebChannelView',
  data() {
    return {
      hello:{title: "hello", value: "vue"}
    } 
  },
  methods: {
    showMsg: function(val) {
      alert(val)
    },
    bClick: function(val) {
      backend.btnClick1(val)
      console.log(val)
    }
  }
}
</script>