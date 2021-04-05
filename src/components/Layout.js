import React from 'react';

export default function Layout({ children }) {

  const layoutStyle = {
    margin: `0 auto`,
    maxWidth: 650,
    padding: `0 1rem`
  };

  return (
    <div style={layoutStyle}>
      {children}
    </div>    
  )
}