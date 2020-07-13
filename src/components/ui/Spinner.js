import React from 'react'
import Image from '../../img/spinner.gif';

function Spinner() {
    return (
        <img src={Image} alt="Loading" style={{ width:'200px' , margin:'auto', display:'block' }}/>
    )
}

export default Spinner
