import '../css/Card-Profile.css';

function CardHeader(props) {
    const { image } = props;

    var style = { 
        backgroundImage: 'url(' + image + ')',
    };

    return (
      <header style={style} id={image} className="card-header">
        {/* <h4 className="card-header--title">News</h4> */}
      </header>
    )
}

function CardBody(props) {

    const { title, text } = props;
    return (
        <div className="card-body">          
          <h2>{title}</h2>
          
          <p className="body-content">{text}</p>
          
          {/* <Button /> */}
        </div>
    )   
}

function CardProfile() {

    return (
        <div className="App">
            <article className="card">
                <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
                <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
            </article>
            {/* <article className="card">
                <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
                <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
            </article> */}
        </div>
    )    
}

export default CardProfile;