import axios from 'axios';
let XValues = [];
let YValues = [];
const API_KEY = 'HGJWFG4N8AQ66ICD';
let StockSymbol = 'FB';
let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
export const fetchData = async () =>{
    try {
        const results = await axios.get(`${url}`);
        for (var key in results['data']['Time Series (Daily)']) {
            XValues.push(key);
            YValues.push(results["data"]['Time Series (Daily)'][key]['1. open']);
          }
        return [XValues, YValues];
    } catch (error) {
        
    }
}
