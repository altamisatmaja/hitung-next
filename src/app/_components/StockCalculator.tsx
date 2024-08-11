"use client";
import Image from "next/image";
import { useState } from "react";

const StockCalculator = () => {
  const [lastPrice, setLastPrice] = useState<number | string>("");
  const [araPrices, setAraPrices] = useState<string[]>([]);
  const [arbPrices, setArbPrices] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [recommendation, setRecommendation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [calculated, setCalculated] = useState<boolean>(false);

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
    setLoading(true);
    const price =
      typeof lastPrice === "string" ? parseFloat(lastPrice) : lastPrice;
    setTimeout(() => {
      if (price >= 50) {
        if (isValidPrice(price)) {
          setAraPrices(calculateARA(price));
          setArbPrices(calculateARB(price));
          setError("");
          setRecommendation("");
          setCalculated(true);
        } else {
          const tickSize = getTickSize(price);
          const lowerRecommendation = Math.floor(price / tickSize) * tickSize;
          const upperRecommendation = Math.ceil(price / tickSize) * tickSize;
          setError(
            `The price must be an integer and a multiple of the tick size (${tickSize}) for the given price range.`
          );
          setRecommendation(
            `Consider using a price of ${lowerRecommendation} or ${upperRecommendation}.`
          );
          setAraPrices([]);
          setArbPrices([]);
          setCalculated(false);
        }
      } else {
        setError("Maaf, harga harus di atas 50.");
        setRecommendation("");
        setAraPrices([]);
        setArbPrices([]);
        setCalculated(false);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-screen items-center justify-center flex flex-col">
      <div className="py-12 bg-gray-100 md:py-24">
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-2 xl:grid-cols-2 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
            <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">
              The best way to write code all day
            </h1>
            <p className="mb-6 text-lg text-gray-600 xl:text-xl lg:mb-8 xl:mb-10">
              For writers, a random sentence can help them get their creative
              juices flowing. Since the topic.
            </p>
            <div className="flex mb-6 space-x-4">
              <input
                type="number"
                value={lastPrice}
                onChange={(e) => setLastPrice(e.target.value)}
                placeholder="Masukkan harga terakhir"
                className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none"
              />
              <button
                onClick={handleCalculate}
                disabled={loading}
                className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 "
              >
                {loading ? "Sedang menghitung..." : "Hitung"}
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {recommendation && (
              <p style={{ color: "blue" }}>{recommendation}</p>
            )}
            <p className="text-sm text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </div>
          <div className="order-1 col-span-2 md:order-2 xl:col-span-3"></div>
          <Image
            className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto"
            alt="hero"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREooNblkcFrTjDTifRG06St5cqtcFmmcHy6g&s"
            width={500}
            height={500}
          />
        </div>
      </div>

      {loading ? (
        <p>Sedang menghitung...</p>
      ) : (
        calculated && (
          <div className="dark:text-white w-full">
            <div className="mx-auto container py-20 px-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                <div className="rounded">
                  {araPrices.map((price, index) => (
                    <div
                      key={index}
                      className="w-full h-40 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4"
                    >
                      <div>
                        <h4 className="text-gray-800 font-bold mb-3">
                          ARA ke-{index + 1}
                        </h4>
                        <p className="text-gray-800 text-sm">{price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded">
                  {arbPrices.map((price, index) => (
                    <div
                      key={index}
                      className="w-full h-40 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
                    >
                      <div>
                        <h4 className="text-white font-bold mb-3">
                          ARB ke-{index + 1}
                        </h4>
                        <p className="text-white text-sm">{price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StockCalculator;
