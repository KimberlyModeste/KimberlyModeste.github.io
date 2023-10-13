import React, {useState} from 'react'
import Links from '../components/Links'
import MenuBar from '../components/MenuBar';
import { Grid } from "semantic-ui-react";


let {LinkSettings}  = require('../modules/modSettings')



function Settings (){
	// console.log(LinkSettings.backgroundColor)
	// LinkSettings.backgroundColor ="#EE4B2B"
	// LinkSettings.hasUpdated = true;


	let ls={
		backgroundColor: LinkSettings.backgroundColor,
		particleColor: LinkSettings.particleColor,
		particlesOn: LinkSettings.particlesOn
	}

	const[check, setCheck] = useState(LinkSettings.particlesOn)


	// function myUpdate(){
	// 	console.log(ls)
	// 	let temp = !check		


	// 	console.log("update check", check)
	// 	console.log("temp", temp)
	// 	if(temp)
	// 	LinkSettings.backgroundColor = "#EE4B2B"
	// 	else
	// 	LinkSettings.backgroundColor = "#e5e5fd"
	// 	// ls.backgroundColor="#EE4B2B"
		
	// 	console.log(LinkSettings.backgroundColor)
	// 	// updateState()
	// 	setCheck(!check)
	// }

	function updateLinks(){
		LinkSettings.particlesOn = !check
		setCheck(!check)
	}
	
	console.log(ls)
	return (
		<div>
			<MenuBar  />
			<Links props={ls} />
			<div className = "settingsDiv">
				<div className='artText'>
					<div><h1>Settings</h1></div>
				</div>
				<div className='smallerSection centered'>
					<label
					style={{
						padding: '10px',
						fontSize: '20px'
					}}>
						Turn {check? 'Off' : 'On' } Links
						</label>
						<input 
							style={{
								textAlign:'center'
							}}
							type="checkbox" 
							checked={check}
							onChange={updateLinks}
						/>
					
					
				</div>	
				<div className='smallerSection'>
					<Grid columns={2}>
						<Grid.Column>
						</Grid.Column>
					</Grid>
				</div>
			</div>
			
		</div>
	)
}
	

// const Settings =(function(){

// 	// const [checked, setChecked] = useState(true);
// 	// const handleCheckLinks = () => {
// 	// 	setChecked(!checked);
// 	// };

// 	// function GetLinks(){
// 	// 	return checked;
// 	// }

// 	
// 	console.log("in settings")
// 	// return(<div></div>)
// 	return{
// 		View: View,
// 		// GetLinks: GetLinks
// 	}

// })
export default Settings

// function Settings() {
//  
// }

// export default Settings


// // Defining a Helper module 
// const Helper = (function () { 
  
//     // Defining a function to be exported 
//     function sum(a, b) { 
//         return a + b; 
//     } 
  
//     // Defining another function to be exported 
//     function multiply(a, b) { 
//         return a * b; 
//     } 
  
//     // Returning the functions 
//     return { 
//         sum: sum, 
//         multiply: multiply, 
//     }; 
// })(); 
  
// // Exporting the Helper module 
// export default Helper;
