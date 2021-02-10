import { useState } from 'react';
import '../css/CardList.css';
import articles from "../data/articles.js";
import CardView from "../components/CardView";

function CardContent(props) {

  const { article, onCardClick } = props;

  var style = { 
      backgroundImage: 'url(' + article.image + ')',
  };

  return (
    <div>
      <article className="card">
        <header style={style} id={article.image} className="card-header" onClick={() => {onCardClick(article)}}>
            {/* <h4 className="card-header--title">News</h4> */}
        </header>
        <div className="card-body">          
          <h2>{article.title}</h2>
          <p className="body-content">{article.text}</p>
          {/* <Button /> */}

          <div>
            {(() => {
              if (article.url) {
                return <a href="/hobbies" >Click</a>;
              } 
            })()}
          </div>

        </div>
      </article>
    </div>
  )   
}

function CardList() {

  const [selectedCard, setSelectedCard] = useState(null);

  function onCardOpenClick(theArticle) {
    setSelectedCard(theArticle);
  }

  function onCardCloseClick() {
    setSelectedCard(null);
  }

  const articleElements = articles.map((article, index) => {
    return <CardContent key={index} article={article} onCardClick={onCardOpenClick} />;
  });

  let  cartView = null;
  if(!!selectedCard){
    cartView = <CardView  article={selectedCard} onBgClick={onCardCloseClick}/>;
  }

  return (
    <div className="App">
      <div className="card-grid">
        {articleElements}
      </div>
      {cartView}
    </div>
  )    
}

export default CardList;