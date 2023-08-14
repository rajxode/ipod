export default function MusicMenu(){
    return(
        <>
            {/* music menu  */}
            <div id="music-menu" className="menu">
                
                {/* heaading inside the music menu */}
                <h3 className="heading">Music</h3>
                
                {/* all the options of the music menu  */}
                <ul>

                    {/* first options having the "active" class by default */}
                    <li className="active" dataid="allSongs">
                        All Songs
                        {/* to show an arrow beside the option name */}
                        <img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>

                    <li dataid="artist">
                        Artists
                        <img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>

                    <li dataid="album">
                        Albums
                        <img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>
                </ul>
            </div>
        </>
    );
}