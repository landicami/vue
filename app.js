const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      title: "The primal empires",
      author: "Star Wars",
      age: 44,
      showInfo: false,
      x: 0,
      y: 9,

      books: [
        {title: "hey", author: "mey"},
        {title: "nej", author: "jau"}
      ]
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },

    changeInfo() {
      this.showInfo = !this.showInfo;
    },

    handleEvent(e) {
      console.log(e);
    },

    handleMousemove (e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
