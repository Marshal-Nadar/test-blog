'use client';

import { createContext, useEffect, useState } from 'react';

export const AdblockContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
};

export const AdblockContextProvider = ({ children }) => {
  const [adblock, setAdblock] = useState(false);

  const googleAdUrl =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

  const detectAdBlock = async () => {
    try {
      await fetch(new Request(googleAdUrl));
    } catch (error) {
      setAdblock(true);
    }
  };

  useEffect(() => {
    detectAdBlock();
  }, []);

  return (
    <AdblockContext.Provider value={{ adblock }}>
      {children}
    </AdblockContext.Provider>
  );
};
