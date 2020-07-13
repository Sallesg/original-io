import * as React from 'react'
import {} from '../../GlobalStyles.css'
import { Text, ProductsImagesOut, ProductsImagesIn, ImageInfos, Colors, ColorsSection, PriceInfo} from './styles'
import handbag from '../../assets/handbag.png'
import sandals from '../../assets/sandals.png'
import shoes from '../../assets/shoes.png'
import wallet from '../../assets/wallet.png'

export function MainCardsTitle() {
  const [ colors, setColors ] = React.useState([
    {
      color: "#A9095E" 
    },
    {
      color: "#2A5A75"
    },
    {
      color: "#A14830"
    },
    {
      color: "#000000"
    }
  ])
  return(
    <>
    <Text><h1>Quem viu, viu também</h1></Text>
    <ProductsImagesOut>
      <ProductsImagesIn>
        <img src={handbag} alt=""/>
        <ImageInfos>
          <PriceInfo>
          R$ 204,00
          </PriceInfo>
          <ColorsSection>
            {colors.map(color => <Colors color={color.color} />)}
          </ColorsSection>
        </ImageInfos>
      </ProductsImagesIn>
      <ProductsImagesIn>
        <img src={sandals} alt=""/>
        <ImageInfos>
          <PriceInfo>
          R$ 204,00
          </PriceInfo>
          <ColorsSection>
            {colors.map(color => <Colors color={color.color} />)}
          </ColorsSection>
        </ImageInfos>
      </ProductsImagesIn>
      <ProductsImagesIn>
        <img src={shoes} alt=""/>
        <ImageInfos>
          <PriceInfo>
          R$ 204,00
          </PriceInfo>          
        </ImageInfos>
      </ProductsImagesIn>
      <ProductsImagesIn>
        <img src={wallet} alt=""/>
        <ImageInfos>
          <PriceInfo>
          R$ 204,00
          </PriceInfo>
          <ColorsSection>
            {colors.map(color => <Colors color={color.color} />)}
          </ColorsSection>
        </ImageInfos>
      </ProductsImagesIn>
    </ProductsImagesOut>
    </>
  )
}