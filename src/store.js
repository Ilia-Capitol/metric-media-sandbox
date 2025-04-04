// src/store.js
import { create } from 'zustand';

// Define your store
const useStore = create((set) => ({
  searchTerm: '',
  searchResults: null,
  setsearchResults: res => set({ searchResults: res }),
  isFetchingResult: false,
  startFetchingResult: () => set({ isFetchingResult: true }),
  stopFetchingResult: () => set({ isFetchingResult: false })
}));

export default useStore;
