export default function Artist(){
    return(
        <>
        {/* to render the artist page */}
            <div className="artist single_page">
                {/* image for the artist page */}
                <img className="cover_image" src={require("../Files/image/artist.jpg")} alt="artist"/>
            </div>
        </>
    );
}