import React from 'react'

function Hero({heroName}) {
  if(heroName === 'Jocker'){
    throw new Error("Not a hero");
  }
  return (
    <div>
      Welcome {heroName}
    </div>
  )
}

export default Hero
