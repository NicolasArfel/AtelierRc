import './Banner.css'

const Banner = ( {title, description}) => {
    return (
        <div className="banner ">
                <h1 className="banner__title" > {title} </h1>
                <p className="banner__description" > {description} </p>
        </div>
    )
}

export default Banner;