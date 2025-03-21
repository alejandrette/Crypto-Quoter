import axios from "axios";
import { create } from "zustand";
import { CryptoCurrency, Cryptos, CryptosData } from "../types";
import { devtools } from "zustand/middleware";

type CryptoState = {
  cryptos: Cryptos[];
  cryptosData: CryptosData;
  loading: boolean;
  fetchCryptos: () => Promise<void>
  fetchData: (cryptocurrency: CryptoCurrency) => Promise<void>
}

export const useCrypto = create<CryptoState>()(devtools((set) => ({
  cryptos: [],
  cryptosData: {} as CryptosData,
  loading: false,
  fetchCryptos: async () => {
    try {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD'
      const { data } = await axios.get(url)
      set({ cryptos: data.Data })
    } catch (error) {
      console.error("Error fetching cryptos:", error);
    }
  },
  fetchData: async (cryptocurrency) => {
    set({ loading: true })
    try {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency.crypto}&tsyms=${cryptocurrency.currency}`
      const { data: { DISPLAY } } = await axios.get(url)
      set({ cryptosData: DISPLAY[cryptocurrency.crypto][cryptocurrency.currency], loading: false })
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
})))