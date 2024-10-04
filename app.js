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
        {title: "hey", author: "mey", img: 'assets/pef.PNG', isFav: true},
        {title: "nej", author: "jau", isFav: false},
        {title: "yes", author: "bes", isFav: true}

      ],

      url: "https://google.se",
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

    toggleisFav (item) {
      item.isFav = !item.isFav;
      console.log("Toggled", this.isFav)
    }
  },

  computed: {
    filteredBooks(){
      return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app");
