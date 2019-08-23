<template>
  <div id="header">
    <b-navbar variant="info" type="dark" toggeable="lg">
      <b-navbar-brand href="#">Picture of a day from NASA</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <date-picker name="date" v-model="poadDate" :config="options" @dp-hide="setDate"></date-picker>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="rightMenu">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">My favs</b-dropdown-item>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightMenu: false,
      showDate: true,
      poadDate: null,
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true,
        showClear: false,
        showClose: false
      }
    };
  },
  methods: {
    setDate: function() {
      this.$store.dispatch('setPoadDate', this.poadDate)
      this.$store.dispatch("fetchPoad");
    }
  },
  computed: {
    date() {
      return new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
    }
  },
  created() {
    var currentDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");

    this.$store.dispatch("fetchPoad");
  }
};
</script>

<style scoped>
</style>
