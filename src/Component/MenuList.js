
export default function MenuList(){
    return (
        <>
            {/* to show the main menu over the screen  */}
            <div id="main-menu" className="menu">
                {/* heading menu on top of the list */}
                <h3 className="heading">Menu</h3>

                {/* Showing all the options of the menu list */}
                <ul>
                    {/* first element have the "active" class options by default */}
                    <li className="active" dataid="coverflow">
                        Coverflow

                        {/* for showing the arrow sign beside the option name */}
                        <img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>
                    <li dataid="games">
                        Games<img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>
                    <li dataid="settings">
                        Settings<img src={require("../Files/image/angle-right.png")} alt="enter"/>                                
                    </li>
                    <li dataid="music">
                        Songs<img src={require("../Files/image/angle-right.png")} alt="enter"/>
                    </li>
                </ul>
            </div>
        </>
    );
}