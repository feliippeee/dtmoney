import logoImg from '../../assets/logo.svg';

import {Container, Content} from './styles';

interface HeaderProps {
    OnOpenNewTrasactionModal: () => void;
}

export function Header({OnOpenNewTrasactionModal}: HeaderProps) {
   
    return(
      <Container>
        <Content>  
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={OnOpenNewTrasactionModal}> 
                Nova Transação
            </button>
           
        </Content>
    </Container>
  
)
}