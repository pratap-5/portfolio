import { create } from "zustand";

const useGlobal = create((set) => ({
  darkMode: true,
  setDarkMode: (darkMode) => set({ darkMode }),
  homePage: false,
  setHomePage: (homePage) => set({ homePage }),
}));

export default useGlobal;
