import Card from "./components/CompoundComponents/Card"


 

const App = () => {
  return (
    <>
      <Card>
        <Card.Title>Something cool</Card.Title>
        <Card.Content>Amazing content</Card.Content>
        <Card.Footer>This is the footer</Card.Footer>
      </Card>
      <br />
      <Card>
        <Card.Content>Amazing content</Card.Content>
        <Card.Title>Something cool</Card.Title>
        <Card.Footer>This is the footer</Card.Footer>
      </Card>
    </>
  )
}

export default App
