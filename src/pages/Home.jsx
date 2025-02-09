import React from 'react'
import Landing from '../component/Landing'
import Guide from '../component/Guide'
import Ourfocus from '../component/Ourfocus'
import Implements from '../component/Implements'
import Mission from '../component/Mission'
import Invest from '../component/Invest'

function Home() {
  return (
    <div>
        <Landing/>
        <Guide/>
        <Ourfocus/>
        <Implements/>
        <Mission/>
        <Invest/>
    </div>
  )
}

export default Home
