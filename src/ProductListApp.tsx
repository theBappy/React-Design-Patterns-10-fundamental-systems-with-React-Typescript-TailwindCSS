import RenderList from "./components/ListData/RenderList"
import ProductInfo from "./components/ProductList/ProductInfo"
import { clothing, electronics, homeGoods } from "./ProductData/data"

const App = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
        <RenderList
        data={electronics}
        resourceName="product"
        dataToRender={ProductInfo}
        />    
        <RenderList
        data={clothing}
        resourceName="product"
        dataToRender={ProductInfo}
        />
        <RenderList
        data={homeGoods}
        resourceName="product"
        dataToRender={ProductInfo}
        />
    </div>
  )
}

export default App