import './Nav.css';


function Nav(props) {

    function changePage(newPage){
        props.changePage(newPage);
    }


    return (
        <div className="Nav">
            <div className="Nav-index-container">
                <div className='Nav-index-container-item'>
                    /
                </div>
                <div className='Nav-index-container-item' onClick={() => changePage("root")}>
                    Home
                </div>

                <div className={props.isNow == 'Intro' ? 'Nav-index-container-item-now' : 'Nav-index-container-item'}onClick={()=>changePage("intro")}>
                    Intro
                </div>


                <div className={props.isNow == 'Summary' ? 'Nav-index-container-item-now' : 'Nav-index-container-item'} onClick={()=>changePage("summary")}>
                    Summary
                </div>


                <div className={props.isNow == 'Work' ? 'Nav-index-container-item-now' : 'Nav-index-container-item'} onClick={()=>changePage("work")} >
                    Work
                </div>


                <div
                    className={props.isNow == 'Personal' ? 'Nav-index-container-item-now' : 'Nav-index-container-item'} onClick={()=>changePage("personal")} >
                    Personal
                </div>


                <div className={props.isNow == 'ETC' ? 'Nav-index-container-item-now' : 'Nav-index-container-item'} onClick={()=>changePage("etc")}>
                    ETC
                </div>

                <div className='Nav-index-container-item'>
                    /
                </div>
            </div>
        </div>

    );
};

export default Nav;