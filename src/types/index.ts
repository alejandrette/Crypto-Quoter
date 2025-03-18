export type Currency = {
  code: string;
  name: string;
}

export type CryptoCurrency = {
  currency: string;
  crypto: string;
}

export type Cryptos = {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
  }
}

export type CryptosData = {
  IMAGEURL: string;
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGE24HOUR: string;
  LASTUPDATE: string;
}