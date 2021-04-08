import Modal from "react-modal";

import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root'); // pra acessibilidde, modal entra no root e não no body

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false); // começando como false ou seja fechado

  function handleOpenNewTrasactionModal(){
      setisNewTransactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal(){
      setisNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
    <Header OnOpenNewTrasactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTrasactionModal} />
    <GlobalStyle />
    </TransactionsProvider>
  );
}


