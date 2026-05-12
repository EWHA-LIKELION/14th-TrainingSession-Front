import { create } from "zustand";

export const useToastStore = create((set) => {
  return {
    text: "",
    type: "check",
    isOpen: false,

    showToast: (text, type = "check") => {
      set((state) => ({
        text,
        type,
        isOpen: true,
      }));
    },

    closeToast: () => {
      set((state) => ({
        isOpen: false,
      }));
    },
  };
});
