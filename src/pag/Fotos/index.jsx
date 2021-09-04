import {Banner,} from '../../componentes/Main' 
export const Fotos = () => {
    return(
        <>
         <Banner
        titulo="Página Principal - Eduardo"
        imagem="imagens/banner.png"></Banner>
        <div class="fotos">
           <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="imagens/img3.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Na piscina com minha irmã</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="imagens/img1.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Eu no sofá</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="imagens/img4.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Minha namorada</h5>
      </div>
    </div>
  </div>
</div>
<br></br>
        </>
  
    )
} 