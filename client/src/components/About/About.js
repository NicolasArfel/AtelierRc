import Banner from '../Banner/Banner';
import './About.css'

const AboutImg = '../../images/about.jpeg'


const About = () => {
    return (
        <main className="about container center">
            <Banner title={`À propos`} description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus odit deserunt cupiditate fuga porro obcaecati sapiente, magni iusto vitae pariatur, eaque facilis exercitationem modi eos distinctio dolor inventore, ipsam dolorum!`}/>
            <div className="row">
                <div className="about__img col s6">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="about__description col s6" >

                    <p className=" " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam eum itaque ratione laborum! Similique aut, dolore culpa sit beatae porro nisi quae sequi voluptatem, delectus non blanditiis amet exercitationem.
                        Nemo, accusantium aliquam. Culpa inventore aperiam sunt, modi dolorum quae maxime harum? At consectetur iure ducimus quis, provident velit nostrum rem est dolores voluptatibus, suscipit corporis nihil sit voluptas id?
                        Molestias, aliquam dolores harum ad architecto, omnis deserunt dolore minus minima facere sunt distinctio? Beatae animi totam aspernatur non deleniti ducimus natus dolore, ut minus, molestiae dignissimos veniam! Officia, nam?
                        Harum, cumque sed. Voluptatem excepturi est temporibus asperiores libero, molestiae nihil quasi magnam nisi eligendi veritatis aut dolor doloremque hic facere dolore voluptates commodi ipsa mollitia unde fugit ad eveniet.
                        Incidunt, repellendus doloremque. Tempore atque doloribus quod provident in natus quia placeat sapiente numquam veniam tenetur ea id, dolorem quis assumenda vel fuga aliquid, hic delectus velit repellat ipsa vitae.</p>
                </div>
            </div>

        </main>
    )
};

export default About;
