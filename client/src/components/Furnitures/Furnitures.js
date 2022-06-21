import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Furnitures.css';
const image = '../../images/contact_img.png'

const title = 'Mobilier';
const description = `Retrouvez ici quelques meubles uniques à acheter.`;


const Furnitures = () => {
    return (
        <main className="container">
            <Banner title={title} description={description} />
            <div class="row furniture__section">
                <div class="col s12 m4 furniture__card">
                    <div class="card">
                        <div class="card-image furniture__img">
                            <img src={image} alt="meuble"></img>
                                <NavLink to="/" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></NavLink>
                        </div>
                        <div class="card-content">
                                <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4 furniture__card">
                    <div class="card">
                        <div class="card-image furniture__img">
                            <img src={image} alt="meuble"></img>
                                <NavLink to="/" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></NavLink>
                        </div>
                        <div class="card-content">
                                <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4 furniture__card">
                    <div class="card">
                        <div class="card-image furniture__img">
                            <img src={image} alt="meuble"></img>
                                <NavLink to="/" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></NavLink>
                        </div>
                        <div class="card-content">
                                <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </main>
    )
}

export default Furnitures;