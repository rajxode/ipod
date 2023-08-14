import MusicMenu from "./MusicMenu";
import Artist from "./Artist";
import Album from "./Album";
import AllSongs from "./AllSongs"

// for rendering the music-menu over the screen 
export default function MusicLibrary(props){
    var {OpenMusicOption} = props;
    return(
        <>
            {/* rendering the music pages as the selected options */}
            {/* by default the music-menu page will be rendered on screen  */}
            {OpenMusicOption==='music'?<MusicMenu />:null}
            {OpenMusicOption==='allSongs'?<AllSongs />:null}
            {OpenMusicOption==='album'?<Album />:null}
            {OpenMusicOption==='artist'?<Artist />:null}
        </>
    )
}