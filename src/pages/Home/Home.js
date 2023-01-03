import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import { useState } from 'react'
import { product } from '../../data/data'
import ProductItem from '../../components/Product/ProductItem'
import { ContainerList } from './styled'
import Products from '../../components/Product/Products'
import Footer from '../../components/Footer'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import Filtros from '../../components/Filtro'






const Home = () => {

  const [busca, setBusca] = useState("")
  const [produto, setProduto] = useState(product)
  const [sortPrice, setSortPrice] = useState('title')



  return (
    <div>
      <Navbar busca={busca} setBusca={setBusca} />
      <MenuCategory />
      <Slider />
      <Banner />
      <Products />
      <Filtros
         produto={produto}
        setProduto={setProduto}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
      <ContainerList>
        {produto
          .filter((produto) => {
            return produto.title.toLowerCase().
              includes(busca.toLowerCase())
          })
          .sort((currentValue, nextValue) => {
            switch (sortPrice) {
              case "price":
                return currentValue.price - nextValue.price
              case "dueDate":
                return nextValue.price - currentValue.price
            }
          })
          .map(produtos => {
            return <ProductItem key={produtos.id} produtos={produtos} />
          })

        }
      </ContainerList>
      <Footer />
    </div>
  )
}


export default Home
