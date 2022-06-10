/* --- imports --- */

import Banner from '../Banner/Banner';
import './About.css'

/* --- éléments créés pour les props --- */

const AboutImg = '../../images/about.jpeg'
const title = 'À propos';
const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus odit deserunt cupiditate fuga porro obcaecati sapiente, magni iusto vitae pariatur, eaque facilis exercitationem modi eos distinctio dolor inventore, ipsam dolorum!';

const About = () => {
    return (
        <main className="about container center">
            <Banner title={title} description={description} />
            <div className="row">
                <div className="about__img col s6">
                    <img src={AboutImg} alt="" className='responsive-img' />
                </div>
                <div className="about__description col s6" >
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi harum quod, minus saepe debitis illum odio expedita nam, est eveniet tempore maxime. Pariatur quos aspernatur mollitia. Ea molestiae assumenda numquam.</p>
                </div>
            </div>

        </main>
    )
};

export default About;
