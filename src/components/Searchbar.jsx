import React from 'react';
import { useState } from 'react';
import { getTransactions } from '../covalent/api';

export let transfers = [];
function Searchbar() {
    
    const [addr, setAddr] = useState("");

    const [loading, setLoading] = useState(false);

    const validate = (addr) => {
        setLoading(true);
        if(addr.length !== 42){
            return false;
        }
        else{
            return true;
        }
    }

    const handleSubmit = async() => {
        if(validate(addr) === true){
            transfers = await getTransactions(addr);
        }
        setLoading(false);
    }

    return (
        <div className="w-screen flex justify-center my-2  ">
        <div className="duration-1000 w-2/5 p-2 overflow-y-auto text-center bg-gray-900 shadow">
        <div className="flex items-center">   
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setAddr(e.target.value)} placeholder="Enter a wallet address" value={addr} required/>
            </div>
            <button className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>
                <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>{ loading ? "loading..." : "Search"}
            </button>
        </div>
        </div>
        </div>
    )
}

export default Searchbar;