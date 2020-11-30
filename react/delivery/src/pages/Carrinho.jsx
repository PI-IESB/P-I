import React from 'react'
import Pagina from '../components/Pagina'
import {useLocation} from 'react-router-dom'
import styles from './styles'
export default () => {
  const sanduiches = [
    {id: 1, Nome:'x-tufão'},
    {id: 2, Nome:'x-vacina'},
    {id: 3, Nome:'x-cloroquina'},
    {id: 4, Nome:'x-bolsafamilia'},
    {id: 5, Nome:'x-gafanhoto'},
    {id: 6, Nome:'x-emergencial'},
    {id: 7, Nome:'x-aglomeração'},
    {id: 8, Nome:'x-corona'}
  ]
  const combo = [
    {id: 3, Nome:'x-cloroquina', acompanhamento1:'batata atleta', acompanhamento2:'coca nuclear'},
    {id: 8, Nome:'x-corona', acompanhamento1:'batata atleta', acompanhamento2:'coca nuclear'},
    {id: 9, Nome:'x-corona', acompanhamento1:'batata atleta', acompanhamento2:'coca nuclear'}
    

  ]
  const location= useLocation();
  const Pedido=[];
  if(location.state !== undefined){
  if(location.state.combo !== undefined){
    Pedido.push(combo.filter(combo => combo.id === location.state.id));
    if(localStorage.getItem('pedido') !== undefined){
      Pedido.push(JSON.parse(localStorage.getItem('pedido')));
      localStorage.setItem('pedido', JSON.stringfy(Pedido));
      console.log(Pedido);
    }
    else{
      localStorage.setItem('pedido', JSON.stringfy(Pedido));
    }
  }
  else{
    Pedido.push(sanduiches.filter(hamburguer => hamburguer.id === location.state.id));
    console.log(Pedido);
  }
   }
  return (
    <Pagina>
   
    </Pagina>

  )
}