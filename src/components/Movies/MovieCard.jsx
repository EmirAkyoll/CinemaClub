import { Card } from 'semantic-ui-react';

function MovieCard(props) {
    return (
        <div>
            <Card style={{ display: 'flex', flexDirection: 'flex-column', justifyContent: 'center', paddingTop: '10px', border: '1px solid gray' }}>
                <Card.Content>
                    <Card.Header> { props.title } </Card.Header>
                    <Card.Description style={{ textAlign: 'justify' }}> { props.description } </Card.Description>
                </Card.Content>

                <Card.Content extra style={{}}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Card.Meta> { props.publishedYear } </Card.Meta>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MovieCard;
