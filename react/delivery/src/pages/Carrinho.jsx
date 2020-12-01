import React from 'react'
import Pagina from '../components/Pagina'
import {useLocation} from 'react-router-dom'
import styles from './styles'
export default () => {
  const sanduiches = [
    {id: 1, Nome:'x-tufão'},
    {id: 2, Nome:'x-vacina'},
    {id: 3, Nome:'x-emergencial'},
    {id: 4, Nome:'x-gafanhoto'},
    {id: 5, Nome:'x-corona'},
    {id: 6, Nome:'x-bolsafamilia'},
    {id: 7, Nome:'x-cloroquina'},
    {id: 8, Nome:'x-aglomeração'},
  ]
  const combo = [
    {id: 9,  Nome:'combo infectado', acompanhamento1:'x-tufao', acompanhamento2:'batata atleta', acompanhamento3:'coca nuclear'},
    {id: 10, Nome:'combo sem mascara', acompanhamento1:'x-cloroquina', acompanhamento2:'batata atleta', acompanhamento3:'coca nuclear'},
    {id: 11, Nome:'combo 2020', acompanhamento1:'x-corona', acompanhamento2:'batata atleta', acompanhamento3:'coca nuclear'},
    {id: 12, Nome:'combo 1.0', acompanhamento1:'x-corona', acompanhamento2:'x-gafanhoto', acompanhamento3:'batata atleta', acompanhamento4:'coca nuclear'}

  ]
    const location= useLocation();
  const Pedido=[];
  if(location.state !== undefined){
  if(location.state.combo !== undefined){
    Pedido.push(combo.filter(combo => combo.id === location.state.id));
    if(localStorage.getItem('pedido') !== undefined){
      Pedido.push(JSON.parse(localStorage.getItem('pedido')));
      localStorage.setItem('pedido', JSON.stringify(Pedido));
      console.log(Pedido);
    }
    else{
      localStorage.setItem('pedido', JSON.stringify(Pedido));
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