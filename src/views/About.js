  
import '../css/About.css'
import img from '../assets/women.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div id="about">
      <Header />
    <h2 id="title-about">Vårt kaffe</h2>
    <section>
      <p><strong>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</strong></p>
    </section>
<section>
<p>
    Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p>
    Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
    </p>
    </section>

    <img  src={img} alt="bild på VD"/>

    <h3 id="text-about">Eva Cortado</h3>
    <p>VD och Grundare</p>
    <Footer />
    </div>

  )
}


export default About