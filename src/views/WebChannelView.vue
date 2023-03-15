<template>
  <div class="channel">
    <h1>This is an about page</h1>
    <button @click="bClick(hello)">버튼 Object</button>
    <button @click="bClick(10)">버튼 number</button>
    <button @click="bClick('abcde')">버튼 string</button>
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