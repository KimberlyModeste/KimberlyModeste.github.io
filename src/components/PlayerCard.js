import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const PlayerCard = (props) => {

	return (
			<Card href={props.Url}>
				<Card.Content>
					<Card.Description>
						{props.Name}
					</Card.Description>
				</Card.Content>
				{
					props.Image !== ''? <Image src={props.Image} /> : <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				}
			</Card>
	)
}

export default PlayerCard
