import MenuList from "./MenuList";
import Coverflow from "./Coverflow";
import MusicLibrary from "./MusicLibrary";
import Games from "./Games";
import Setting from "./Setting"


// for the display/screen of the ipod
export default function Display(props){
    // props value
    const {showMenu,OpenMenuOption,OpenMusicOption,showMusic} =props;
    return (
        <>
            {/* screen of the ipod */}
            <div className="screen">

                {/* render pages on the basis of selected menu options (bydefault showing the menu on the screen ) */}
                {OpenMenuOption==='menu' && showMenu?<MenuList />:null}
                {OpenMenuOption==='coverflow'?<Coverflow />:null}
                {OpenMenuOption==='games'?<Games />:null}
                {OpenMenuOption==='settings'?<Setting />:null}
                {OpenMenuOption==='music' || showMusic?<MusicLibrary OpenMusicOption={OpenMusicOption} />:null}
            </div>
        </>
    );
}