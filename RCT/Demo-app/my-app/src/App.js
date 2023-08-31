import './App.css';
import Products from './components/Products';
function App() {

  let products = [
    {
    id :"p1",
    tittle: "Nirma",
    date : new Date(2025,5,22)
  },
  {
    id :"p2",
    tittle: "Surf Excel",
    date : new Date(2026,10,22),
  },
  {
    id :"p3",
    tittle: "Ariel",
    date : new Date(1998,9,8)
  },
  {
    id :"p4",
    tittle: "Maggie",
    date : new Date(1990,5,1),
  }


]

  return (
    <div>
    <div className="App">
      <Products items={products}></Products>
    </div>

    </div>

  );
}

export default App;
