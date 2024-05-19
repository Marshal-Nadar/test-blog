'use client';

import AdBlockNotice from '@/components/AdBlockNotice/AdBlockNotice';
import { AdblockContext } from '@/context/AdblockContext';

import React, { useContext } from 'react';

const AdblockProvider = ({ children }) => {
  const { adblock } = useContext(AdblockContext);

  if (adblock) {
    return <AdBlockNotice />;
  } else {
    return <div>{children}</div>;
  }
};

export default AdblockProvider;
