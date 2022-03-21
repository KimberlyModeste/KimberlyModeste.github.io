import React from 'react';
import MasRes from '../resources/Master_Resume.pdf'
import MenuBar from '../components/MenuBar';

function Resume(){


return( 
    <div > 
        <MenuBar inverted={true} />
        <iframe title='MasterResume' src={MasRes} width="100%" height="500px"/> 
    </div>
)
}
export default Resume