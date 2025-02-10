import React from 'react'
import Landing from '../component/Landing'
import Guide from '../component/Guide'
import Ourfocus from '../component/Ourfocus'
import Implements from '../component/Implements'
import Mission from '../component/Mission'
import Invest from '../component/Invest'
import Faq from '../component/Faq'
import Scroll from '../component/Scroll'


function Home() {
  return (
    <div>
        <Landing/>
        <Scroll/>
        <Guide/>
        <Ourfocus/>
        <Implements/>
        <Mission/>
        <Invest/>
        <Faq/>
        
    </div>
  )
}

export default Home
