import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { HiArrowsRightLeft } from "react-icons/hi2";

function CurrencyConvertor() {
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [converting, setConverting] = useState(false)

    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();

          
            setCurrencies(data);
        } catch (error) {
            console.log("ERROR: ", error);
        }
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);
    
    const swapcurr= ()=>{
        setToCurrency(fromCurrency)
        setFromCurrency(toCurrency)
    }
  
    const convert= async ()=>{
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json();

            setConvertedAmount(data.rates[toCurrency]+ " " + toCurrency)
        } 

        catch (error) {
            console.log("ERROR: ", error);
        }
    }

    return (
        <div className='max-w-2xl mx-auto my-10 text-white p-5 bg-zinc-950 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-zinc-200 mb-5'>Currency Converter</h2>

            <div className='flex flex-col  sm:flex-row items-center justify-center'>
                
                <Dropdown currencies={currencies} currency={fromCurrency} title="From :" setCurrency={setFromCurrency} />
                
                <button onClick={()=>{swapcurr()}} className="mx-4  sm:my-0 m-4 h-9  text-pink-200 rounded-full p-2 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <HiArrowsRightLeft />
                </button>

                <Dropdown currencies={currencies} currency={toCurrency} title="To :" setCurrency={setToCurrency} />
            </div>

            <div className='mt-4'>
                <label htmlFor='amount' className='block text-sm font-medium'>
                    Amount:
                </label>
                <input
                    type='number'
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                    className='w-full p-2 border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-pink-500 mt-1'
                />
            </div>

            <div className='flex justify-center mt-5'>
                <button className= {`px-5 py-2 bg-indigo-600 rounded-lg ${converting? "animate-pulse": " "}`}
                onClick={() => { convert() }}>Convert</button>
            </div>

           {convertedAmount && (<div className='mt-4 text-lg font-medium text-center text-pink-200'>
                Converted Amount: {convertedAmount}
            </div>)}
        </div>
    );
}

export default CurrencyConvertor;
