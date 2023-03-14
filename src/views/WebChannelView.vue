<template>
  <div class="channel">
    <h1>This is an about page</h1>
    <button @click="bClick(hello)">버튼5</button>
    <button onclick="btnClick(6)">버튼6</button>
  </div>
</template>
<script>
import test from '@/assets/test'

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
      test.btnClick1(val)
    }
  }
}
</script>