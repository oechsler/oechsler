<template>
  <Page :inverted="false">
    <h1>About me.</h1>
    <p>
      <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit.
      Ducimus expedita corrupti velit magnam dolore a nulla nobis distinctio
      quasi.
    </p>
    <h2>Languages</h2>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Page: () => import(/* webpackChunkName: "Page" */ "@/components/Page.vue")
  }
})
export default class Home extends Vue {}
</script>
