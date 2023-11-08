import { useState } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'


function App() {

  return (
    <>
      <main className='flex flex-col justify-start items-center'>
      <Header />
      <Body />
      </main>
    </>
  )
}
export default App
