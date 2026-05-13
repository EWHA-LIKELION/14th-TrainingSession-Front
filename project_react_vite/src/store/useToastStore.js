import { create } from 'zustand'


export const useToastStore = create((set) => ({
    text:"",
    type: "check",
    isOpen: false,

    showToast: (text, type = "check")  => 
        set({
            text,
            type,
            isOpen: true,
        }),
    
    closeToast: () =>
        set({
            isOpen: false,
        }),

}));

export default useToastStore;

