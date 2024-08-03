"use client"
import { useState } from 'react';

const StockCalculator = () => {
  const [lastPrice, setLastPrice] = useState<number | string>('');
  const [araPrices, setAraPrices] = useState<string[]>([]);
  const [arbPrices, setArbPrices] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');

  const percentage = 0.25;

  const getTickSize = (price: number) => {
    if (price < 200) return 1;
    if (price < 500) return 2;
    if (price < 2000) return 5;
    if (price < 5000) return 10;
    return 25;
  };

  const adjustPriceToTick = (price: number) => {
    const tickSize = getTickSize(price);
    return Math.round(price / tickSize) * tickSize;
  };

  const calculateARA = (price: number) => {
    let araPrices = [];
    for (let i = 1; i <= 10; i++) {
      price = price * (1 + percentage);
      price = adjustPriceToTick(price);
      araPrices.push(price.toFixed(2));
    }
    return araPrices;
  };

  const calculateARB = (price: number) => {
    let arbPrices = [];
    for (let i = 1; i <= 10; i++) {
      price = price * (1 - percentage);
      price = adjustPriceToTick(price);
      if (price <= 50) {
        price = 50;
        arbPrices.push(price.toFixed(2));
        break;
      }
      arbPrices.push(price.toFixed(2));
    }
    return arbPrices;
  };

  const isValidPrice = (price: number) => {
    const tickSize = getTickSize(price);
    return Number.isInteger(price) && price % tickSize === 0;
  };

  const handleCalculate = () => {
    const price = typeof lastPrice === 'string' ? parseFloat(lastPrice) : lastPrice;
    if (price >= 50) {
      if (isValidPrice(price)) {
        setAraPrices(calculateARA(price));
        setArbPrices(calculateARB(price));
        setError('');
        setRecommendation('');
      } else {
        const tickSize = getTickSize(price);
        const lowerRecommendation = Math.floor(price / tickSize) * tickSize;
        const upperRecommendation = Math.ceil(price / tickSize) * tickSize;
        setError(`The price must be an integer and a multiple of the tick size (${tickSize}) for the given price range.`);
        setRecommendation(`Consider using a price of ${lowerRecommendation} or ${upperRecommendation}.`);
        setAraPrices([]);
        setArbPrices([]);
      }
    } else {
      setError('The price must be at least 50.');
      setRecommendation('');
      setAraPrices([]);
      setArbPrices([]);
    }
  };

  return (
    <div className='h-screen w-screen items-center justify-center flex flex-col'>
      <h1>Stock Calculator</h1>
      <input 
        type="number" 
        value={lastPrice} 
        onChange={(e) => setLastPrice(e.target.value)} 
        placeholder="Enter last price" 
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {recommendation && <p style={{color: 'blue'}}>{recommendation}</p>}
      <div>
        <h2>ARA Prices:</h2>
        <ul>
          {araPrices.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
        <h2>ARB Prices:</h2>
        <ul>
          {arbPrices.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockCalculator;
