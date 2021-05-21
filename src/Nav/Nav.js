import './Nav.css';


function Nav(props){


    return (
        <div className="Nav">
            <div className="Nav-index-container">
                <div className='Nav-index-container-item'>
                    /
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#Home">Home</a>
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#Intro" >
                        <div className={props.isNow=='Intro'?'Nav-index-container-item-now':'Nav-index-container-item'}>
                            Intro
                        </div>
                    </a>
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#Summary"> <div className={props.isNow=='Summary'?'Nav-index-container-item-now':'Nav-index-container-item'}>
                        Summary
                    </div></a>
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#Work"> <div className={props.isNow=='Work'?'Nav-index-container-item-now':'Nav-index-container-item'}>
                        Work
                    </div></a>
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#Personal"> <div className={props.isNow=='Personal'?'Nav-index-container-item-now':'Nav-index-container-item'}>
                        Personal
                    </div></a>
                </div>
                <div className='Nav-index-container-item'>
                    <a href="#ETC"> <div className={props.isNow=='ETC'?'Nav-index-container-item-now':'Nav-index-container-item'}>
                        ETC
                    </div></a>
                </div>
                <div className='Nav-index-container-item'>
                    /
                </div>
            </div>
        </div>

    );
};

export default Nav;