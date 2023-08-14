

export default function AllSongs(){
    return(
        <>
        {/* render the all songs page */}
            <div className="single_page song">
                {/* show the image over the playing song */}
                <div className="song_image">
                    <img className="cover_image" src={require('../Files/image/song.jpg')} alt='music'/>
                </div>

                {/* control buttons for the playing song */}
                <audio controls autoPlay>
                    <source src={require('../Files/Songs/music.mp3')} type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    );
}