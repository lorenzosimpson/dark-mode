import { useState } from 'react';



export const useLocalStorage = (key, initialValue) => { //key needed to retrieve item from local storage
    const [storedValue, setStoredValue] = useState(() => {
        // To retrieve an item from localStorage, call localStorage.getItem('itemName')
        // If that item doesn't exist, it will return undefined
        // Get from local storage with key: 
        const item = window.localStorage.getItem(key);
        // if we have this item, parse and return it
        // else (undefined), return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    // create the setter function
    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };
    return [storedValue, setValue]
}