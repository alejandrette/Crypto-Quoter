import axios from "axios";
import { create } from "zustand";
import { CryptoCurrency, Cryptos } from "../types";

type CryptoState = {
  cryptos: Cryptos[];
  fetchCryptos: () => Promise<void>
  fetchData: ({ currency, crypto }: CryptoCurrency) => Promise<void>
}

export const useCrypto = create<CryptoState>((set) => ({
  cryptos: [],
  fetchCryptos: async () => {
    try {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD'
      const { data } = await axios.get(url)
      set({ cryptos: data.Data })
    } catch (error) {
      console.error("Error fetching cryptos:", error);
    }
  },
  fetchData: async ({ currency, crypto }) => {
    try {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
      const { data: { DISPLAY } } = await axios.get(url)
      console.log(DISPLAY[crypto][currency]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}))