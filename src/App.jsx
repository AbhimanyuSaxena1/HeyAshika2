import React from 'react'
import {Hashrouter} from "react-router-dom";
import Cards from './Components/cards'

function App() {
  return (<>
    <Hashrouter>
    <Cards/>
    </Hashrouter>
    </>
  )
}

export default App