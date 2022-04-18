import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type TransactionsData = {
    id: number;
    amount: number;
    type: string;
    createdAt: string;
    category: string;
    title: string;
};

type TransactionsProviderProps = {
    children: ReactNode;
};

type TransactionsContextData = {
    transactions: TransactionsData[];
    handleCreateTransaction: (transaction: TransactionInput) => Promise<void>;
};

type TransactionInput = Omit<TransactionsData, 'id' | 'createdAt'>;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){

    const [transactions, setTransactions] = useState<TransactionsData []>([]);

     async function fetchTransactions(){
         const response = await api.get('transactions')
         .then(response => setTransactions(response.data.transactions))
     }  

    useEffect(() => {fetchTransactions();}, []);
    
    async function handleCreateTransaction(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});

      const {transaction} = response.data;

      setTransactions([...transactions, transaction])

    };

    return(
        <TransactionsContext.Provider value={{transactions, handleCreateTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
};

    export function useTransactions(){
        const context = useContext(TransactionsContext);

        return context;
    }