export default function Album(){
    return(
        <>
        {/* render the album page  */}
            <div className="album single_page">
                {/* image for page */}
                <img className="cover_image" src={require("../Files/image/album.png")} alt="album"/>
            </div>
        </>
    );
}