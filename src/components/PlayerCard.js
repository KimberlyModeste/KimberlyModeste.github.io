import React from 'react'
import {Card, Image} from 'semantic-ui-react'

import close from '../resources/closed.jpg'

const PlayerCard = (props) => {

	return (
			<Card className='pcard' href={props.Url} target={props.target}>
				<Card.Content className='pcard-content'>
					<Card.Description>
						{props.Name}
					</Card.Description>
				</Card.Content>
				{
					props.Image !== '' ? 
						props.Closed ? 
							<div className='closed-div'>
								<Image className='closed-og-img' src={props.Image}  /> 
								<Image className='closed-img' src={close}  />
							</div>
							: <Image src={props.Image}  />: <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				}
			</Card>
	)
}

export default PlayerCard
