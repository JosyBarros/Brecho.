import Products from './Products'
import { Button, CardContainer, Container, Image, Info, Price, Title } from './style'


const ProductItem = ({produtos}) => {


  return (
  
   
   <Container>
    
    <CardContainer>
      <Image src={produtos.img}/>
      <Info>
        <Title>{produtos.title.toUpperCase()}</Title>
        <Price> R$ {produtos.price}</Price>
        <Button
        // onClick={() => addToCart(item)}
        >Comprar</Button>
      </Info>
    </CardContainer>  
    </Container>
   
  )
}

export default ProductItem
