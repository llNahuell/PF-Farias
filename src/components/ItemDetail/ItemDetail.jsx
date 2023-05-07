import ''

const ItemDetail = ({id, name, img, category, descriptiion, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: ${category}
                </p>
                <p className="Info">
                    Descripcion: ${descriptiion}
                </p>
                <p className="Info">
                    precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada ',quantity)} />
            </footer>
        </article>
    )
}