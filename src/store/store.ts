import axios from "axios";
import { create } from "zustand";
import { Cryptos } from "../types";

type CryptoState = {
  cryptos: Cryptos[];
  fetchCryptos: () => Promise<void>
}

export const useCrypto = create<CryptoState>((set) => ({
  cryptos: [],
  fetchCryptos: async () => {
    try {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD'
      const { data } = await axios.get(url)
      set({ cryptos: data.Data })
      console.log(data.Data);
    } catch (error) {
      console.error("Error fetching cryptos:", error);
    }
  }
}))