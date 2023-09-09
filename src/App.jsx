import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  const [isFooterHidden, setIsFooterHidden] = useState(false);

  return (
    <div className='h-screen w-full'>
      <Header setIsFooterHidden={setIsFooterHidden} />
      <Main />
      <Footer isHidden={isFooterHidden} />
    </div>
  )
}

export default App