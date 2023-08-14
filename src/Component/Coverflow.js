export default function Coverflow(){
    return(
        <>  
            {/* Coverflow display */}
            <div className="coverflow single_page">
                {/* image for coverflow */}
                <img className="cover_image" src={require("../Files/image/coverflow.jpg")} alt="coverflow"/>
            </div>
        </>
    );
}