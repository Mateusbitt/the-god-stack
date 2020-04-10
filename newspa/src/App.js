import React, { useEffect, useState } from 'react';
import { Block } from 'components'

// import { Container } from './styles';

const App = () => {

  const [counter, setCounter] = useState(0)

  const unMonunt = () => {
    console.log('sai')
  }

  const mount = () => {
    console.log('entrei')
  }

  const counterHasChanged = () =>{
    console.log('mudou')
  }
  
  useEffect( () => {
    mount()

    return unMonunt
  }, [])

  useEffect( () => {
    counterHasChanged()
  }, [counter])



  return (
    <>
      <Block> Breno </Block>
      <button onClick={ () => setCounter(counter+1) } > click </button>
    </>
  );
}

export default App
