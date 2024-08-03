"use client"
import { useState } from 'react';

const CryptoCalculator = () => {
  const [investmentPrice, setInvestmentPrice] = useState<number | string>('');
  const [targetPrice, setTargetPrice] = useState<number | string>('');
  const [investmentAmount, setInvestmentAmount] = useState<number | string>('');
  const [potentialReturn, setPotentialReturn] = useState<number | null>(null);

  const handleCalculate = () => {
    const invested = typeof investmentPrice === 'string' ? parseFloat(investmentPrice) : investmentPrice;
    const target = typeof targetPrice === 'string' ? parseFloat(targetPrice) : targetPrice;
    const amount = typeof investmentAmount === 'string' ? parseFloat(investmentAmount) : investmentAmount;

    if (invested && target && amount) {
      const returnAmount = ((target - invested) / invested) * amount;
      setPotentialReturn(returnAmount);
    }
  };

  return (
    <div>
      <h1>Crypto Calculator</h1>
      <input 
        type="number" 
        value={investmentPrice} 
        onChange={(e) => setInvestmentPrice(e.target.value)} 
        placeholder="Investment Price" 
      />
      <input 
        type="number" 
        value={targetPrice} 
        onChange={(e) => setTargetPrice(e.target.value)} 
        placeholder="Target Price" 
      />
      <input 
        type="number" 
        value={investmentAmount} 
        onChange={(e) => setInvestmentAmount(e.target.value)} 
        placeholder="Investment Amount" 
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {potentialReturn !== null && (
          <h2>Potential Return: ${potentialReturn.toFixed(2)}</h2>
        )}
      </div>
    </div>
  );
};

export default CryptoCalculator;
