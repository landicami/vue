<template>
  <div>
    <main>
      <h1>{{ title }}</h1>
      <div>
        <input type="text" ref="name" />
        <button @click="handleClick">Click me</button>
      </div>
      <Modal
        :isVisible="isModalVisible"
        :msg="msg"
        theme="sale"
        @close="isModalVisible = false"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Footer,
    Modal,
  },
  data() {
    return {
      title: "My First Vue App",
      isModalVisible: false, // Reaktiv egenskap för att styra modalens synlighet
      msg: "From bapp to Modal",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isModalVisible = true;
    }, 2000);
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("dark");
      this.$refs.name.focus();

      // Visa modalen när knappen klickas
      this.isModalVisible = true;
    },
  },
};
</script>

<style>
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

h1 {
  border-bottom: 1px solid black;
  display: inline-block;
  padding: 10px;
}

.dark {
  color: green;
}
</style>
