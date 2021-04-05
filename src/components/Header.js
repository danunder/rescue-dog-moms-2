import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


export default function Header() {
  return (
    <div style={{ margin: `0 0`, maxWidth: 650, padding: `0 0` }}>
      <StaticImage
        src="../images/banner.png"
        alt="Rescue Dog Moms Banner"
        />
    </div>
    
  )
}