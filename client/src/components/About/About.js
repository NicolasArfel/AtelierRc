/* --- imports --- */

import Banner from '../Banner/Banner';
import './About.css'

/* --- éléments créés pour les props --- */

const AboutImg = '../../images/about.jpeg'
const title = 'À propos';
const description = '';

const About = () => {
    return (
            <main className="about container center">
                <Banner title={title}  description={description}/>
                <div className="row about__row">
                    <div className="about__img col s6">
                        <img src={AboutImg} alt="" className='responsive-img ' />
                    </div>
                    <div className="about__description col s6" >
                        <h3 >Romain Caillon</h3>
                        <p>_ Atelier Romain Caillon / depuis 2022.</p>
                        <p>_ Responsable de l’Atelier maquettes des Ateliers Jean Nouvel / 2011- 2021.</p>
                        <p>_ École Nationale Supérieure d'Architecture Paris Val-de-Seine / diplômé d’État en 2011.</p>
                   
                        <h3 >L'Atelier</h3>
                        <p>Formé au sein des Ateliers Jean Nouvel pendant plus de dix ans, Romain Caillon fonde son agence d’architecture en 2022. </p>
                        <p>Fort d’une expérience pluridisciplinaire, allant de l’architecture à la maquette, il oriente aujourd’hui son travail vers la réhabilitation qui est au cœur de son processus de création.</p>
                        <p>Ayant manié la nano-échelle pendant de nombreuses années, le souci du détail anime l’architecte.</p>
                        <p>Ainsi, l’atelier tend à proposer une démarche singulière, mêlant les échelles, alliant fonctionnalité et esthétisme. Son travail vise à rendre chaque projet identitaire et épuré.</p>
                    
                        <h3 >Contact</h3>
                        <p>romaincaillon.archi@gmail.com  /  (+33) 06 75 52 92 94  </p>
                       </div>
                </div>

            </main>
    )
};

export default About;
