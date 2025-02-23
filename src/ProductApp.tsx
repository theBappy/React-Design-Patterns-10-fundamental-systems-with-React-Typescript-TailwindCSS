import axios from "axios"
import ProductList from "./components1/ProductList"
import DataSource from "./components1/shared/DataSource"

const getServerData = (url: string) => async () =>{
    const response = await axios.get(url);
    return response.data;
} 

const App = () => {
  return (
    <div className="mt-[20px]">
        <h1>Welcome to the Fake Store</h1>
        <DataSource resourceName="products" getDataFunc={getServerData('https://fakestoreapi.com/products')}>
            <ProductList />
        </DataSource>
    </div>
  )
}

export default App