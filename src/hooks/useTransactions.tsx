import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//interface TransactionInput {
//    title: string;
//    amount: number;
//    type: string;
//    category: string;
//}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // invés de fazer o de cima, usando o typescript para omitir os dados que não vai ter ainda no caso o id e a data que são gerados automaticamente

interface TransactionsProviderProps {
    children: ReactNode; // aceita tag html jsx 
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData // forçando a tipagem no js
);

export function TransactionsProvider({ children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=> {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions)) // o response trazendo do createServer
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
       
     const response = await api.post('/transactions', {
         ...transactionInput,
        createdAt: new Date(),
        })
     const {transaction} = response.data 

     setTransactions([
         ...transactions,
         transaction,

     ]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}