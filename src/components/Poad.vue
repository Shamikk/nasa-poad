<template>
  <div id="poad" v-if="poad">
    <div class="poad-card">
      <b-card
        :title="poad.title"
        :sub-title="poad.copyright"
        :img-src="poad.url"
        :img-alt="poad.explanation"
        img-bottom
        tag="article"
        style="max-width: 100%"
        class="mb-2"
      >
        <b-card-text>{{ poad.explanation }}</b-card-text>
      </b-card>
      <div>
        <b-button v-b-toggle.collapse-1 variant="primary">Show API data</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <code>{{ poad }}</code>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "poad",
  computed: {
    poad() {
      return this.$store.state.poad;
    }
  }
}
</script>

<style scoped>
.poad-card {
  width: 100%;
  margin: 0 auto;
}

.title {
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}

.title h1 {
  width: 80%;
  float: left;
}

.title h3 {
  width: 20%;
  float: left;
  text-align: right;
  vertical-align: bottom;
}

.clear {
  clear: both;
}
</style>