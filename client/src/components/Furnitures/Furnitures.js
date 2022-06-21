import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Furnitures.css';
const image = '../../images/contact_img.png'

const title = 'Mobilier';
const description = `Retrouvez ici quelques meubles uniques à acheter.`;


const Furnitures = () => {

const furnitures = useSelector((state) => state.FurnituresReducer.furnitures)
console.log('fufu',furnitures)

    return (
        <main className="container">
            <Banner title={title} description={description} />
            <div className="row furniture__section">
                <div className="col s12 m4 furniture__card">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={image} alt="mobilier"></img>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><NavLink to="#">This is a link</NavLink></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4 furniture__card">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={image} alt="mobilier"></img>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><NavLink to="#">This is a link</NavLink></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4 furniture__card">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={image} alt="mobilier"></img>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><NavLink to="#">This is a link</NavLink></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
               
            </div>

        </main>
    )
}

export default Furnitures;