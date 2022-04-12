import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header(){
    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money"/>
                <button type="button">
                    Transação
                </button>
            </Content>
        </Container>
    )
}