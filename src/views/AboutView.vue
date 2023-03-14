<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button onclick="btnClick(10)" @click="showMsg(200)">버튼1</button>
    <button onclick="btnClick(100)" @click="showMsg(500)">버튼2</button>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  methods: {
    showMsg: function(val) {
      alert(val)
    }
  }
}
</script>