import { useEffect, useMemo } from "react"
import { useCrypto } from "../store/store"
import { SyncLoader } from "react-spinners";

export function Result() {
  const cryptosData = useCrypto(state => state.cryptosData)
  const loading = useCrypto(state => state.loading)

  useEffect(() => {
    console.log("cryptosData updated:", cryptosData);
  }, [cryptosData]);

  const isEmpty = useMemo(() => Object.keys(cryptosData).length > 0, [cryptosData])

  return (
    <>
      {isEmpty ? (
        <div className="w-80 md:w-1/4 bg-white grid grid-cols-[25%_75%] text-black p-4 rounded-b-lg">
          <div className="flex items-center justify-center">
            <img src={`https://cryptocompare.com${cryptosData.IMAGEURL}`} alt={`jk`} width={100} />
          </div>

          <div className="ml-4 space-y-2">
            <p>The Price is: <span className="font-bold">{cryptosData.PRICE}</span></p>
            <p>Highest price of the day: <span className="font-bold">{cryptosData.HIGHDAY}</span></p>
            <p>Lowest price of the day: <span className="font-bold">{cryptosData.LOWDAY}</span></p>
            <p>Variation last 24 hours: <span className="font-bold">{cryptosData.CHANGE24HOUR}</span></p>
            <p>Last update: <span className="font-bold">{cryptosData.LASTUPDATE}</span></p>
          </div>
        </div>
      ) : (
        <span></span>
      )}
      {loading && <div className="mt-8"><SyncLoader color="white" /></div>}
    </>
  );
}
