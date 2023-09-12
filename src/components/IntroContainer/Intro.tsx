import { ImageContainer, IntroContainer, SubTitle, Title, TitleContainer } from "../../styles"
import banner from '../../assets/banner.svg'

export const Intro = () => {
    return (
        <IntroContainer>
        <TitleContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
        </TitleContainer>
        <ImageContainer>
         <img src={banner}></img>
        </ImageContainer>
        </IntroContainer>
    )
}