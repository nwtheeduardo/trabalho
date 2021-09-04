import {Banner} from '../../componentes/Main' 

export const Home = () => {
    return(
        <>
        <Banner
        titulo="Página Principal - Eduardo"
        imagem="imagens/banner.png"></Banner>
    <div class="home">
<table>
  <tr>
    <td><img  width="400" height="400" src='imagens/img5.jpg'/></td>
    
    <td> <h4>Olá, esse sou eu. Nessa página mostrarei todas minhas fotos e falar do meu dia a dia.</h4>
    <br>
    </br>
           <h4>
               O site está em desenvolvimento, logo mais vem mais atualizaçôes.
               </h4>
         </td>
</tr>
</table>
</div>
<div class="home1">
<table>
  <tr>
    <td><img  width="400" height="400" src='imagens/img7.jpg'/></td>
    
    <td> <h4>Essa é minha namorada, se o site é sobre mim ela tem que estar, porque ela faz parte da minha vida!  </h4>
         </td>
</tr>
</table>
</div>

        </>
    )
}