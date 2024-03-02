import './App.css'
import { FaceCarousel } from './components/FaceCarousel'
import { MassageCarousel } from './components/MassageCarousel'
import { NavBar } from './components/NavBar'
import { GiftCard } from './components/GiftCard'
import { PricesTable } from './components/PricesTable'
import { LocationMap } from './components/LocationMap'

function App() {

  return (
      <div>
        <header>
          <div className='container focim'>
          <h1 className='studio'>PIPÓCS Masszázs Stúdió</h1>
          </div>
        </header>
        <NavBar />
        <h2>Üdvözöljük!</h2>
        <section id="masszazsok">

          <h2 className='sections'>Masszázsok</h2>
          <MassageCarousel />
          
        </section>

        <section id="arckezeles">
          <h2 className='sections'>Arckezelések</h2>
          <FaceCarousel />
        </section>
        <section id="idopont">
          <h2 className='sections'>Időpontkérés</h2>
        <p>Időpontot foglalni a +36-70/111-2233 telefonszámon tudsz.</p>
        
        
        </section>
        <section id="arak">
          <h2 className='sections'>Árak</h2>
          <PricesTable />
        </section>
        <section id="ajandek">
          <h2 className='sections'>Ajándék utalványok</h2>
        <p>Stúdiónkban van lehetőséged ajándék utalványt vásárolni:</p>
        <GiftCard />
        <p>értékben.</p>
        </section>
        <section id="fontos">
          <h2 className='sections'>Fontos tudnivalók</h2>
        <p>Időpontfoglaláskor kérlek jelezd, ha van valami komolyabb egészségügyi problémád, ha felhasználnál ajándékutolványt.    </p>
        <p>Kezelést megelőzően egy órával nem ajánlott sem enni, sem inni.</p>
        <p>Parkolás az utcán lehetséges.</p>
        <p>Kérlek, könnyed ruházatban gyere.</p>
        <p>Erotikus masszázst nem vállalunk!</p>
        </section>
        <section id="holvagyunk">
          <h2 className='sections'>Hol találsz meg minket</h2>
        <LocationMap />

        </section>
        <footer>
        <section id="kapcsolat" className='kapcsolat'>
          <h3 className='sections'>Kapcsolat</h3>
        <p>6000 Kecskemét, Katona József tér</p>
        <p>+36-70/111-2233</p>
        </section>
        </footer>
      </div>
  )
}

export default App
