import { Container, Header } from 'semantic-ui-react'

function HeaderComp() {
  return (
    <>
      <Container text style={{ marginTop: '2em', marginBottom: '2em' }}>
        <Header as='h1' style= {{ fontSize: '40px' }}>MOVIE ADVICER</Header>
        <p>Welcome, here are some suggestions for you, have a good time.</p>
      </Container>
    </>
  )
}

export default HeaderComp;
