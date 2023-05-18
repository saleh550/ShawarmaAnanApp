function Card( {url,name,desc,price}){
    return(<>

      <article class="food-card mt-5">
        <img class="card__image" src={url} />
        <div dir="rtl" class="card__data">
          <div  class="card__info">
            <h2>{name}</h2>
            <p>{desc}</p>
          </div>
          <h3 class="card__price">{price}</h3>
          <button class="card__add">+</button>
        </div>
      </article>

    </>)

}
export default Card