import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialValue) {

    const userData = JSON.parse(localStorage.getItem(key));
    if (userData instanceof Function) {
        return userData();
    } else {
        return userData ? userData : initialValue;
    }
}

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}
