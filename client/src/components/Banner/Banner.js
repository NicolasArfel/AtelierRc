const Banner = ( {title, description}) => {
    return (
        <div className="about__banner ">
                <h1 className="about__banner-title" > {title} </h1>
                <p className="about__banner-description" > {description} </p>
        </div>
    )
}

export default Banner;