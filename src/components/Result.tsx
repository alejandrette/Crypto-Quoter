import { useEffect, useMemo } from "react"
import { useCrypto } from "../store/store"

export function Result() {
  const cryptosData = useCrypto(state => state.cryptosData)

  useEffect(() => {
    console.log("cryptosData updated:", cryptosData);
  }, [cryptosData]);

  const isEmpty = useMemo(() => Object.keys(cryptosData).length > 0, [cryptosData])

  return (
    <>
      {isEmpty ? (
        <div className="bg-white grid grid-cols-[25%_75%] w-80 text-black p-4 rounded-b-lg">
          <div className="flex items-center justify-center">
            <img src={`https://cryptocompare.com${cryptosData.IMAGEURL}`} alt={`jk`} width={100} />
          </div>

          <div className="ml-4">
            <p className="font-bold">The Price is: <span className="font-normal">{cryptosData.PRICE}</span></p>
            <p className="font-bold">The Price is: <span className="font-normal">{cryptosData.HIGHDAY}</span></p>
            <p className="font-bold">The Price is: <span className="font-normal">{cryptosData.LOWDAY}</span></p>
            <p className="font-bold">The Price is: <span className="font-normal">{cryptosData.CHANGE24HOUR}</span></p>
            <p className="font-bold">The Price is: <span className="font-normal">{cryptosData.LASTUPDATE}</span></p>
          </div>
        </div>
      ) : (
        <span>hola</span>
      )}
    </>
  );
  
}
