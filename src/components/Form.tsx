import { currencies } from "../data/currency";

export function Form() {
  return (
    <div className="w-80 bg-white text-black p-4 rounded-lg m-5">
      <form className="flex flex-col gap-4">
        <label htmlFor="currency" className="font-bold">Currency</label>
        <select name="currency" className="bg-transparent text-gray-600">
          <option value={0}>-- Select --</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>

        <label htmlFor="crypto" className="font-bold">Crypto</label>
        <select name="crypto" className="bg-transparent text-gray-600">
          <option value={0}>-- Select --</option>
          {}
        </select>
      </form>
    </div>
  )
}
