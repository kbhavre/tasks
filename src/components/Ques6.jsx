import React, { useState } from 'react'

const Ques6 = () => {

    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    const calculateMortage=() => {
        const p = parseFloat(loanAmount);
        const annualRate = parseFloat(interestRate) / 100;
        const r = annualRate / 12;
        const n = parseFloat(loanTerm) * 12;

        if (!p || !annualRate || !n) {
            setMonthlyPayment("Invalid Input");
            return;
        }

        const M = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyPayment(M.toFixed(2));
    };

    const resetValues = () =>{
        setLoanAmount('');
        setInterestRate('');
        setLoanTerm('');
    }



    return (
        <div className="bg-amber-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h1 className="text-4xl px-4 py-2 text-center">
                Question 6 : Mortage Calculator
            </h1>


            <div className='flex flex-col gap-4 bg-slate-200 p-4 border-black border-2 rounded-md w-[30%] my-10'>
                <input
                    type="number"
                    placeholder='Loan Amount'
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className='border p-2 rounded-md'
                />

                <input type="number"
                    placeholder='Annual Interest Rate'
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className='border p-2 rounded-md'
                />

                <input type="number"
                    placeholder='Loan Term (Years)'
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className='border p-2 rounded-md'
                />


                <div className='flex flex-row items-center justify-between gap-2'>
                <button
                    onClick={calculateMortage}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all w-[50%]'>
                    Calculate
                </button>
                <button
                    onClick={resetValues}
                    className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all w-[50%]'>
                    Reset
                </button>

                </div>
                
                {
                    monthlyPayment !== null &&
                    <div className='font-bold font-mono tracking-tighter'>
                        Monthly Payment: {
                            monthlyPayment === 'Invalid Input' ?
                                'Please enter valid values' :
                                `${monthlyPayment}`
                        }
                    </div>
                }
            </div>

        </div>
    )
}

export default Ques6;
