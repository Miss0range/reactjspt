import React, {useId} from 'react'

const InputBox = ({
    label, 
    amount, 
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions=[],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) => {
    const id = useId();
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-lg flex`}>
        <div className="w-1/2">
            <label htmlFor={id}  className='text-slate-600 font-semibold mb-2 inline-block'>{label}</label>
            <input 
            type="number" 
            name="" 
            id={id}
            className='outline-none w-full bg-transparent py-1.5 font-medium text-slate-600'
            placeholder='Amount'
            disabled = {amountDisabled}
            value={amount}
            onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
            />
        </div>
        <div className="w-1/2">
            <p className="text-black/40 mb-2 w-full text-right text-slate-600 font-semibold">
                Currency Type
            </p>
            <select 
            name=""
            className='float-right rounded-lg px-1 py-1 bg-slate-100 cursor-pointer outline-none text-center font-semibold'
            value={selectedCurrency}
            onChange = {(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled = {currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox