import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import emmaDarcy from '../../assets/images/01_3.webp'
import mattSmith from '../../assets/images/02_1.webp'
import paddyConsidine from '../../assets/images/03_1.webp'

function Home() {

  //useState para cambiar el boton activo de las suscripciones "1 Mes"=1, "3 Meses"=3 o "12 Meses"=12
  const [buttonActive, setButtonActive] = React.useState(1)


  return (
    <>
      <Header />


      <div className='banner'>
        <img className='showImage' src='https://hbomax-images.warnermediacdn.com/2022-07/Hero-background-mob.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=575' alt='La casa del dragon'/>
        <img className='showTitle' src='https://hbomax-images.warnermediacdn.com/2022-07/tt_lat_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com' alt='La casa del dragon' />
        <h4 className='showAvailable'>Disponible Ahora</h4>
      </div>

      <div className='starterPlan'>
          <h2>Los planes empiezan desde</h2>
          <h1>$3.491,96</h1>
          <h4>/mes*</h4>
          <button>Suscríbete ahora</button>
          <p>*aplica al plan prepago anual.</p>
        </div>

      <div className='plans'>


        <div className='plansSelector'>
          <h1>Conoce nuestros planes y ahorra cuando eliges el de 3 o 12 meses con pago anticipado</h1>
          <div className='plansButtons'>
            <button className={buttonActive === 1 && 'active'} onClick={()=>setButtonActive(1)}>1 Mes</button>
            <button className={buttonActive === 3 && 'active'} onClick={()=>setButtonActive(3)}>3 Meses</button>
            <button className={buttonActive === 12 && 'active'} onClick={()=>setButtonActive(12)}>12 Meses</button>
          </div>
          <div className='buttonsDownText'>
            <p></p>
            <p>Ahorra hasta 11%</p>
            <p>Ahorra hasta 33%</p>
          </div>

          <div className='planCard'>
            <div className='planTitle'>
              <h1>Móvil</h1>
              <h2>$4.900,00 <span>/ mes</span></h2>
            </div>
              <ul>
                <li><span>+</span> Disfruta solo en Smartphones y Tabletas.</li>
                <li><span>+</span> Ve en 1 dispositivo a la vez.</li>
                <li><span>+</span> Contenido en definición estándar.</li>
                <li><span>+</span> Descarga y disfruta tus titulos preferidos donde sea.</li>
              </ul>
              <button>Elige plan móvil</button>
          </div>

          <div className='planCard'>
            <div className='planTitle'>
              <h1>Estándar</h1>
              <h2>$6.900,00 <span>/ mes</span></h2>
            </div>
              <ul>
                <li><span>+</span>Disfruta en todas tus pantallas.</li>
                <li><span>+</span>Chromecast y Airplay disponibles.</li>
                <li><span>+</span>Ve en 3 dispositivos a la vez.</li>
                <li><span>+</span>Contenido en alta definición y 4K.</li>
                <li><span>+</span>Descarga y disfruta tus titulos preferidos donde sea.</li>
                <li><span>+</span>Configura hasta 5 perfiles para toda la familia.</li>
              </ul>
              <button>Elige plan estándar</button>

          </div>

        </div>


        <div className='estrenos'>
          <h1>Estrenos que se convertirán en nuevos favoritos.</h1>
        </div>


        <div className='soonTVShow'>
          <div className='available'>
            <h2>disponible agosto 21</h2>
          </div>

          <div className='show' />

          <div className='showCard'>
            <h1>Casa del Dragón</h1>
            <p>Antes del invierno vino el fuego. Viaja 200 años en el pasado para conocer el mitico universo de los Targaryen.</p>
            <div className='showCast'>
              <div className='showCastColumn'>
                <img className='castImg' src={emmaDarcy} alt="Emma D'arcy"/>
                <h1>Emma D'arcy</h1>
                <p>Es Rhaenyra Targaryen</p>
              </div>
              <div className='showCastColumn'>
                <img className='castImg' src={mattSmith} alt="Matt Smith" />
                <h1>Matt Smith</h1>
                <p>Es Daemon Targaryen</p>
              </div>
              <div className='showCastColumn'>
                <img className='castImg' src={paddyConsidine} alt="Paddy Considine" />
                <h1>Paddy Considine</h1>
                <p>Es Viserys I Targaryen</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home