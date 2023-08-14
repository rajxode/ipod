import {Component} from "react";
import "../styles.css";
import Controllers from "./Controllers";
import ZingTouch from "zingtouch";
import Display from "./Display";

export default class Ipod extends Component {
    constructor(){
        super();
        this.state= {
            // state of showing or hiding the menu
            showMenu:false,
            // for the selected menu options (by default showing the main menu)
            OpenMenuOption:'menu',
            // for music-menu 
            showMusic:false,
            // for the selected option within the music menu
            OpenMusicOption:'music'
        }
    }

    // to detect all the rotational motions over the ipod buttons and change the menu options
    controlWheel = () => {
        // storing all the menu options 
        let menuOptions = document.querySelectorAll("li");
        
        // the area over which detecting rotation motions
        var containerElement = document.getElementById('controls_btn');
        var activeRegion = new ZingTouch.Region(containerElement);
        
        // angle of rotation
        var newAngle=0;

        // binding function with motion
        activeRegion.bind(containerElement, 'rotate', function(event){
            
            // increasing the angle on movement over the control buttons
            newAngle += event.detail.distanceFromLast;

            // for clockwise rotation over the buttons
            if (newAngle > 60) {

                // adding "active" class to the menu options on movement to highlight the option 
                for (let i = 0; i < menuOptions.length; i++) {
                  // if the options already have class then removing it
                  if (menuOptions[i].classList.contains("active")) {
                    menuOptions[i].classList.remove("active");
                    
                    // if reached the last options in list
                    if (i === menuOptions.length - 1) {
                      menuOptions[0].classList.add("active");
                    } else {
                      // adding class to next option
                      menuOptions[++i].classList.add("active");
                    }
                  }
                }
                newAngle = 0;
              }
              // for anti-clock wise rotation
              else if (newAngle < -60) {
                // similarly adding the class "active"
                for (let i = menuOptions.length - 1; i >= 0; i--) {
                  if (menuOptions[i].classList.contains("active")) {
                    menuOptions[i].classList.remove("active");
        
                    if (i === 0) {
                      menuOptions[menuOptions.length - 1].classList.add("active");
                    } else {
                      menuOptions[--i].classList.add("active");
                    }
                  }
                }
                newAngle = 0;
              }
        });
    }
    

    // to show/remove menu or music-menu, when menu buttons is clicked 
    handleMenuBtn = () => {
        let {showMenu,OpenMenuOption,showMusic,OpenMusicOption} = this.state;
        
        // if showing music-menu is false
        if(!showMusic){
          // toggle the show menu option 
          if(OpenMenuOption === 'menu'){
            showMenu = !showMenu;
          }
          // for returning back to the main menu from a page 
          else if(showMenu && OpenMenuOption !== 'menu'){
            OpenMenuOption='menu'
          }
        }
        // when show music is true
        else{
          // for returning back to the main menu from music menu
          if(OpenMusicOption ==='music'){
            showMusic=false;
            OpenMenuOption='menu';
          }
          // for returning back to music menu from within music library
          else{
            OpenMusicOption='music';
          }
        }
        
        this.setState({
            showMenu,OpenMenuOption,showMusic,OpenMusicOption       
       })
    }

    
    // for entering inside an options 
    handleOkBtn = () => {
      // for options of main menu
      let activeOption = document.querySelector("#main-menu .active");
      
      // for options of music menu
      let activeMusicOption = document.querySelector("#music-menu .active");


      if (activeOption) {
        // getting value of selected item from its attribute
        let selectedOption = activeOption.attributes.dataid.value;
        
        // if the selected option is coverflow
        if (selectedOption === "coverflow") {
          
          // opening page of coverflow
          this.setState({
            OpenMenuOption:"coverflow"
          });
        } else if (selectedOption === "music") {
          // opening music page
          this.setState({
            OpenMenuOption:"music"
          });
        } else if (selectedOption === "games") {
          // opening games page
          this.setState({
            OpenMenuOption:"games"
          });
        } else if (selectedOption === "settings") {
          // opening settings page
          this.setState({
            OpenMenuOption:"settings"
          });
        }
      }
  
      // if the "active" option in music menu
      else if (activeMusicOption) {
        // getting the selected options in music menu 
        let MusicOption = activeMusicOption.attributes.dataid.value;
  
        // if the selected option is allSongs
        if (MusicOption === "allSongs") {
          // opening the page and also toggle the show music menu options 
          this.setState({
            OpenMusicOption:"allSongs",
            showMusic:true
          });
        } else if (MusicOption === "album") {
          this.setState({
            OpenMusicOption:"album",
            showMusic:true
          });
        } else if (MusicOption === "artist") {
          this.setState({
            OpenMusicOption:"artist",
            showMusic:true
          });
        }
      }
    }

    render(){
        return (
            // main container
            <div className="App">
                
                {/* i pod structure */}
                <div className="iPod">
                    
                    {/* speaker over the screen of ipod */}
                    <div className="speaker_container">
                        <div className="speaker"></div>
                    </div>
                    
                    {/* render display of the ipod */}
                    <Display showMenu={this.state.showMenu}
                             showMusic={this.state.showMusic}
                             OpenMenuOption={this.state.OpenMenuOption}
                             OpenMusicOption={this.state.OpenMusicOption} />
                    
                    {/* render all the buttons on the ipod */}
                    <Controllers controlWheel={this.controlWheel} 
                                 handleMenuBtn={this.handleMenuBtn} 
                                 handleOkBtn={this.handleOkBtn}/>
                
                </div>
            </div>
        );
    }
}
