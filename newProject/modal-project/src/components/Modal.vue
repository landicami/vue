<template>
  <div class="backdrop" v-if="isVisible" ref="modal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <p>Modal content</p>
      <p>{{ msg }}</p>
      <button @click="handleClose">Close Modal</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    msg: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
  methods: {
    handleClose() {
      this.$emit("close"); // Emitera ett event för att stänga modalen
      console.log("Close modal");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 10px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.sale {
  background-color: lightgreen;
  color: white;
  font-weight: bolder;
  text-decoration: underline;
}
</style>
