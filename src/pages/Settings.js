import React, {useState} from 'react'
import Links from '../components/Links'
import MenuBar from '../components/MenuBar';
import { Grid } from "semantic-ui-react";


let {LinkSettings}  = require('../modules/modSettings')


function Settings (){

	let ls={
		backgroundColor: LinkSettings.backgroundColor,
		particleColor: LinkSettings.particleColor,
		particlesOn: LinkSettings.particlesOn,
		themes: LinkSettings.themes
	}

	const[check, setCheck] = useState(LinkSettings.particlesOn)
	const[theme, setTheme] = useState(LinkSettings.themes)
	const[, setRandom] =useState("")

	function updateTheme(e){
		let temp = parseInt(e.target.value)

		switch(temp){
		//Friend Themed
			case 0:
				LinkSettings.backgroundColor = "#e5e5fd"
				LinkSettings.particleColor= "#59065f"
				break;
			case 1:
				LinkSettings.backgroundColor = "#E31C25"
				LinkSettings.particleColor= "#111111"
				break;
			case 2:
				LinkSettings.backgroundColor = "#E8863D"
				LinkSettings.particleColor= "#34271F"
				break;
			case 3: //Edit this friend theme
				LinkSettings.backgroundColor = "#225079"
				LinkSettings.particleColor= "#898C92"
				break;

			
			case 4:
				const hexCode = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
				let str1 = "#"
				let str2 = "#"
				for(let i = 0; i < 6; i++)
				{
					str1+=hexCode[Math.floor(Math.random()*hexCode.length)];
					str2+=hexCode[Math.floor(Math.random()*hexCode.length)];
				}
				setRandom(str1)
				LinkSettings.backgroundColor = str1
				LinkSettings.particleColor= str2
				break;

			case 5:
				let today = new Date()
				switch(today.getMonth())
				{
					case 9:
						LinkSettings.backgroundColor = "#E8863D"
						LinkSettings.particleColor= "#34271F"
						break;
					case 10:
						LinkSettings.backgroundColor = "#FBE6A7"
						LinkSettings.particleColor= "#AB4428"
						break;
					case 11:
						LinkSettings.backgroundColor = "#3FD485"
						LinkSettings.particleColor= "#D6001C"
						break;
					default:
						break;
				}
				break;
			default:
				LinkSettings.backgroundColor = "#e5e5fd"
				LinkSettings.particleColor= "#59065f"
				break;
		}

		LinkSettings.themes = temp
		setTheme(temp)
	}

	function updateLinks(){
		LinkSettings.particlesOn = !check
		setCheck(!check)
	}

	function codeUpdate(){
		let enteredCode = document.getElementById("codeInput").value
		document.getElementById("codeInput").value =''

		let noArray = ["Nope", "Thats not it", "No", "Not correct"]
		enteredCode === process.env.REACT_APP_WEBSITE_CODE ? console.log("Unlocked") : console.log(noArray[Math.floor(Math.random()*noArray.length)])
	}
	
	return (
		<div>
			<MenuBar  />
			<Links props={ls} />
			<div className = "settingsDiv">
				<div className='settingsText'>
					<div><h1>Settings</h1></div>
				</div>
				<div className='smallerSection centered'>
					<label
					style ={{
						padding: '10px',
						fontSize: '2vw'
					}}> Turn {check? 'Off' : 'On' } Links </label>
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
					<Grid columns={4} centered>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.4vw'}}> Madame Lilac </label>
								<input 
									style={{
										textAlign:'center'
									}}
									type="checkbox" 
									value={0}
									checked={theme === 0}
									onChange={updateTheme}
								/>
							</div>
						</Grid.Column>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.4vw'}}> Crimson Rose </label>
								<input 
									style={{
										textAlign:'center'
									}}
									type="checkbox" 
									value={1}
									checked={theme === 1}
									onChange={updateTheme}
								/>
							</div>
						</Grid.Column>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.5vw'}}> Vinny Desert </label>
								<input 
									style={{
										textAlign:'center'
									}}
									type="checkbox" 
									value={2}
									checked={theme === 2}
									onChange={updateTheme}
								/>
							</div>
						</Grid.Column>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.5vw'}}> Type: Null </label>
								<input 
									style={{
										textAlign:'center'
									}}
									type="checkbox" 
									value={3}
									checked={theme === 3}
									onChange={updateTheme}
								/>
							</div>
						</Grid.Column>
					</Grid>

					<Grid columns={LinkSettings.isHoliday ? 2 : 1} centered>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.5vw'}}> Random </label>
								<input 
									style={{
										textAlign:'center'
									}}
									type="checkbox"
									value={4}
									checked={theme === 4}
									onChange={updateTheme}
								/>
							</div>
						</Grid.Column>
						{LinkSettings.isHoliday ? 
						<Grid.Column>
						<div className='centered' width="100%;" height="100%;">
							<label style={{ padding: '10px', fontSize: '1.5vw'}}> Holiday </label>
							<input 
								style={{
									textAlign:'center'
								}}
								type="checkbox"
								value={5}
								checked={theme === 5}
								onChange={updateTheme}
							/>
						</div>
					</Grid.Column>
					:
					<></>	
					}
						
					</Grid>
					<Grid columns={1} centered>
						<Grid.Column>
							<div className='centered' width="100%;" height="100%;">
								<label style={{ padding: '10px', fontSize: '1.5vw'}}> Enter Code </label>
								<input 
									id='codeInput'
									style={{
										textAlign:'center',
										background: 'black',
										color: "white",
										marginRight: "10px" 
									}}
									type="text"
								/>
								{window.innerWidth < 590?
								<div style={{padding: '15px'}}>
									<button onClick={codeUpdate} type='button'>Submit</button>
								</div>
								:
								<button onClick={codeUpdate} type='button'>Submit</button>}
								

							</div>
						</Grid.Column>
					</Grid>
									
				</div>
			</div>
			
		</div>
	)
}
	
export default Settings