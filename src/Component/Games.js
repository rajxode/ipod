export default function Games(){
    return(
        <>
            {/* games display */}
            <div className="game single_page">
                {/* image for showing games page */}
                <img className="cover_image" src={require("../Files/image/games.gif")} alt="games"/>
            </div>
        </>
    );
}