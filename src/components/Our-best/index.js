import Cards from "../Cards";

function OurBest({products}) {
    return (
        <section className='best' style={{ display: '' }}>
            <h2 className="subheader best__subheader">Our best</h2>
            <div className="best__all-products" >
                {products.map((obj) => (
                    <Cards title={obj.title} prise={obj.prise} img={obj.img} />
                ))}
            </div>
        </section>
    )
}

export default OurBest;