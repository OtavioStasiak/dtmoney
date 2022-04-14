import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

type Props = {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Props){
    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Transação
                </button>
            </Content>
        </Container>
    )
}