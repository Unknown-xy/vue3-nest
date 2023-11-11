import { defineStore } from "pinia";

interface stateType {
  number: number;
}

const useTestStore = defineStore("user", {
  state: (): stateType => ({
    number: 0,
  }),

  getters: {},

  actions: {
    setNumber(number: number): void {
      this.number = number;
    },
  },

  persist: {
    enabled: true,
    encryptionKey: "vueTest",
  },
});

export { useTestStore };