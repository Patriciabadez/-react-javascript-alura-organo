import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e design',
        'Mobile',
        'Inovação e gestão'
    ]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) => {
        //previne o comportamento padrão do site auto carregar 
        evento.preventDefault()
        console.log('Form submetido', nome , cargo, imagem)
    }
    return (
        <section className="formulario">
    <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        aoAlterado={valor=>setNome(valor)}/>
        
        <CampoTexto obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        aoAlterado={valor=>setCargo(valor)}
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        aoAlterado={valorImagem(valor)}
        />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao>Criar Card</Botao>
    </form>
</section>
    )
}

export default Formulario