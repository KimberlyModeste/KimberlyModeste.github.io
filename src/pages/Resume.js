import React from 'react';
import MasRes from '../resources/Master_Resume.pdf'

function Resume(){

    return( <div className='Resume'> <iframe title='MasterResume' src={MasRes} width="100%" height="500px"/> </div>)
}
export default Resume