import React from 'react';


import IESupport from 'components/atoms/ie-support';
export default function Component({ children }) {
  return (
    <div>
      <IESupport />
      {children}
    </div>
  )
}

