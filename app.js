const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      title: "The primal empires",
      author: "Star Wars",
      age: 44,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
