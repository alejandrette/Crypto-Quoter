import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { currencies } from "../data/currency";
import { CryptoCurrency } from "../types";
import { useCrypto } from "../store/store";

export function Form() {
  const fetchCryptos = useCrypto(state => state.fetchCryptos)
  const fetchData = useCrypto(state => state.fetchData)
  const cryptos = useCrypto(state => state.cryptos)
  const cryptosData = useCrypto(state => state.cryptosData)
  const [alert, setAlert] = useState<string>('')
  const [cryptocurrency, setCryptocurrency] = useState<CryptoCurrency>({
    currency: '',
    crypto: '',
  })

  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos])

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
      setTimeout(() => setAlert(''), 3000)
      return
    }
    
    fetchData(cryptocurrency)
  }

  return (
    <div className={`w-80 md:w-1/4 bg-white text-black p-4 mt-5 ${Object.keys(cryptosData).length > 0 ? 'rounded-t-lg' : 'rounded-lg'}`}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {alert && <p className="bg-red-500 text-center font-bold text-white rounded-lg p-2">{alert}</p>}

        <label htmlFor="currency" className="font-bold">Currency</label>
        <select 
          name="currency"
          className="bg-transparent text-gray-600 border-blue border rounded-md bg-white focus:ring-2 focus:ring-blue-400 outline-none"
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
          className="bg-transparent text-gray-600 border-blue border rounded-md bg-white focus:ring-2 focus:ring-blue-400 outline-none"
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
