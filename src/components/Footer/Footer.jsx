import { Container, Segment } from 'semantic-ui-react'

function Footer() {
  return (
    <div>
      <Segment inverted style={{  padding: '2em 0em', borderRadius: '5px' }} vertical>
        <Container textAlign='center'>
          <p style={{ fontWeight: 'bold' }}>All rights reserved. ©</p>
        </Container>
      </Segment>
    </div>
  )
}

export default Footer
