export default function Controllers(props){
    return(
        <>
            {/* containing all the control buttons for enter and navigation0 */}
            <div className="controls">

                {/* outer circle of buttons */}
                <div id="controls_btn" className="motion_btn" draggable="false" onMouseOver={props.controlWheel}>
                    {/* menu button */}
                    <div className="btn btn_top" onClick={props.handleMenuBtn}>Menu</div>
                    
                    {/* backward button on the control buttons */}
                    <div className="btn btn_left">
                        {/* font-awesome link for icon */}
                        <i class="fa-solid fa-backward-fast"></i>
                    </div>
                    
                    {/* forward button on the control buttons */}
                    <div className="btn btn_right">
                        <i class="fa-solid fa-forward-fast"></i>
                    </div>
                    
                    {/* bottom button on the control buttons */}
                    <div className="btn btn_bottom">
                        <i class="fa-brands fa-google-play"></i>
                    </div>

                    {/* center ok button */}
                    <div className="enter_btn" onClick={props.handleOkBtn}></div>
                </div>
            </div>
        </>
    );
}