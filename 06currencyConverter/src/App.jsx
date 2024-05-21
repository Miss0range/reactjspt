import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './component/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('cny');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = ()=>{
    setConvertedAmount(Math.round(amount * currencyInfo[to]*1000)/1000);
  }

  const swap = ()=>{
    const temp = amount;
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  }


  return (
    <div 
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage:`url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setFrom(currency)}
              onAmountChange={(newAmount)=>setAmount(newAmount)}
              selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0 5">
              <button 
              type='button'
              onClick={swap}
              className='absolute left-1/2 border-2 -translate-x-1/2 -translate-y-1/2  border-white rounded-md bg-slate-600 text-white px-2 py-0.5 font-semibold'
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
              label="To"
              amount={convertedAmount}
              amountDisabled = {true}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-slate-600 text-white rounded-lg px-4 py-3 font-semibold'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
