import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { currencies } from "../data/currency";
import { CryptoCurrency } from "../types";
import { useCrypto } from "../store/store";

export function Form() {
  const fetchCryptos = useCrypto(state => state.fetchCryptos)
  const cryptos = useCrypto(state => state.cryptos)
  const [alert, setAlert] = useState<string>('')
  const [cryptocurrency, setCryptocurrency] = useState<CryptoCurrency>({
    currency: '',
    crypto: '',
  })

  useEffect(() => {
    fetchCryptos()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCryptocurrency({
      ...cryptocurrency,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(cryptocurrency).includes('')){
      setAlert('Filed Empty')
      setTimeout(() => {
        setAlert('')
      }, 3000);
    }
  }

  return (
    <div className="w-80 bg-white text-black p-4 rounded-lg m-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {alert && <p className="bg-red-500 text-center font-bold text-white rounded-lg p-2">{alert}</p>}

        <label htmlFor="currency" className="font-bold">Currency</label>
        <select 
          name="currency"
          className="bg-transparent text-gray-600"
          value={cryptocurrency.currency}
          onChange={handleChange}
        >
          <option value='' disabled>-- Select --</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>

        <label htmlFor="crypto" className="font-bold">Crypto</label>
        <select 
          name="crypto" 
          className="bg-transparent text-gray-600"
          value={cryptocurrency.crypto}  
          onChange={handleChange}
        >
          <option value='' disabled>-- Select --</option>
          {cryptos.map(cryto => (
            <option key={cryto.CoinInfo.Id} value={cryto.CoinInfo.Name}>{cryto.CoinInfo.FullName}</option>
          ))}
        </select>

        <button className="bg-emerald-400 p-2 rounded-lg text-white font-bold">Quote</button>
      </form>
    </div>
  )
}
