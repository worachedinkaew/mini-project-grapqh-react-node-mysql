import '../css/CardView.css';

function CardView(props) {

    const {article, onBgClick} = props;
    return(
        <div className="card-view">
            <div className="card-view-bg" onClick={onBgClick}/>
            <div className="card-view-content">
                {/* <img src="../images/Resume_Worached_page-0001.jpg" /> */}
                <img src={article.image} />
            </div> 
        </div>
    )
}

export default CardView;