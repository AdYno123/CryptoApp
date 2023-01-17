//http object response
export interface ServiceResponse<T> {
  message: string;
  success: boolean;
  data: T | null;
}

export interface CryptoInfo {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: any;
  closeTime: any;
  firstId: number;
  lastId: number;
  count: number;
}
