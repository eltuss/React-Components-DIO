
import Item from "./components/item";
import Card from "./components/item/Card";

const App = () => {
  return(
    <>
    <h1>minha primeira aplicação com React</h1>
    <ul>
      <Item>
        Item 1
      </Item>
      <Item>
        Item 2
      </Item>
      <Item>
        Item 3
      </Item>
    </ul>
    <Card></Card>
    </>
  )
}

export default App;
