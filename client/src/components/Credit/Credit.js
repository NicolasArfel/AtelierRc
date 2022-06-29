import './Credit.css'

const antho = '../../images/profilAntho.jpg';
const nico = '../../images/profilNico.jpg';
const alix = '../../images/profilAlix.jpg';
const vero = '../../images/profilVero.jpg';

const Credit = () => {
    return (
        <main className="container credit__container">
            <div className="row credit__card">
            <div className="col s12 m3 credit__card-justone">
                    <div className="card">
                        <div className="card-image">
                            <img src={vero} alt='Véronique' />
                            <span className="card-title ">Véronique</span>

                        </div>
                        <div className="card-content">
                            <p className='grey lighten-3'>Product Owner / Scrum Master</p>
                            <p>Animatrice de réunions, nous a guidé avec sa règle en fer.</p>
                            <p>En contact avec le client, elle a su nous transmettre toutes les nouvelles demandes du client (elle partage les dessous de tables)</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3 credit__card-justone">
                    <div className="card">
                        <div className="card-image">
                            <img src={antho} alt='antho' />
                            <span className="card-title">Anthony</span>

                        </div>
                        <div className="card-content">
                            <p className='grey lighten-3'>Lead Dev Front</p>
                            <p>A pris à coeur la gestion de Trello et formé sont chat à créer de nouvelles listes.</p>
                            <p>Egalement appelé Zorro car venant à la rescousse de chacun à chaque instant.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3 credit__card-justone">
                    <div className="card">
                        <div className="card-image">
                            <img src={alix} alt='Alix' />
                            <span className="card-title">Alix</span>

                        </div>
                        <div className="card-content">
                            <p className='grey lighten-3'>Lead Dev Back</p>
                            <p>A travaillée dur en pleine canicule avec la DDE pour nous faire de jolies Routes</p>
                            <p>Peux vous apprendre à coder avec un bébé sur le clavier.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3 credit__card-justone">
                    <div className="card">
                        <div className="card-image">
                            <img src={nico} alt='nico' />
                            <span className="card-title">Nicolas</span>

                        </div>
                        <div className="card-content">
                            <p className='grey lighten-3'>Git Master</p>
                            <p>Fervant défenseur du Saint Git pull, il a su innover dans la création d'erreurs.</p>
                            <p>Padawan du css, et utilisateur compulsif des flexbox</p>
                        </div>
                    </div>
                </div>
                
            </div>


        </main>
    )
}

export default Credit;