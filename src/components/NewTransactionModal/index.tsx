import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../services/api";


import { Container, RadioBox, TransactionTypeContainer } from './styles';

type Props = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: Props){
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const {handleCreateTransaction} = useTransactions();


    function handleSetTypeDeposit(){
        setType('deposit');
    };

    function handleSetTypeWithdraw(){
        setType('withdraw');
    };

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        await handleCreateTransaction({title, type, amount, category })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    };

    return(
        <Modal 
        overlayClassName="react-modal-overlay" 
        className="react-modal-content" 
        onRequestClose={onRequestClose} 
        isOpen={isOpen}
        >
            <button type="button" onClick={onRequestClose}>
            <img src={closeImg} alt="close-button" className="react-modal-close" /> 
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)}/>

            <input placeholder="Valor" type="number" value={amount}  onChange={(event) => setAmount(Number(event.target.value))}/>
            
            <TransactionTypeContainer>
                <RadioBox activeColor="green" isActive={type === 'deposit'} type="button" onClick={handleSetTypeDeposit}>
                    <img src={incomeImg} alt="entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox activeColor="red" isActive={type === 'withdraw'} type="button" onClick={handleSetTypeWithdraw}>
                    <img src={outcomeImg} alt="saida" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input placeholder="Categoria"  onChange={(event) => setCategory(event.target.value)} />

            <button type="submit">
                Cadastrar
            </button>
            </Container>
        </Modal>
    )
}