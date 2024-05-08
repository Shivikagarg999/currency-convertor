import React from 'react';

function Dropdown({ currencies, currency, setCurrency, favorites, title = "" }) {
    return (
        <div>
            <label htmlFor={title}>{title}</label>

            <div className='mt-1 relative'>
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className='w-full lg:w-auto p-2 border rounded-md bg-zinc-200 border-gray-300 text-black shadow-sm focus:outline-none mt-1'

                 >

                    {Object.keys(currencies).map((code) => (
                        <option value={code} key={code}>
                            {code}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Dropdown;
