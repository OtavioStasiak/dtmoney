import Modal from "react-modal";
import { Container } from './styles';

type Props = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: Props){
    return(
        <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
            <Container>
            <h2>Cadastrar transação</h2>
            <input placeholder="Título"/>
            <input placeholder="Título" type="number"/>
            <input placeholder="Categoria" />

            <button type="submit">
                Cadastrar
            </button>
            </Container>
        </Modal>
    )
}