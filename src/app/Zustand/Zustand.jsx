import { create } from "zustand";

export const useNavStore = create((set) => ({
  building: "",
  setBuilding: (building) => set({ building }),
  postcode: "",
  setPostcode: (postcode) => set({ postcode }),
  uprn: "",
  setUprn: (uprn) => set({ uprn }),
}));
