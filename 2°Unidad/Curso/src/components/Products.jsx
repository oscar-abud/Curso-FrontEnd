import ProductCard from "./ProductCard";
import {products} from '../data/products.js'

function Products()
{
    return(
        <section id="productos" className="section">
            <div className="container">
                <div className="d-flex justify-content-between aling-items-end mb-4">
                    <div>
                        <h2 className="mb-0">Galeria de Productos</h2>
                        <small className="text-muted">Seleccion de productos</small>
                    </div>
                </div>
                <div className="row g-4">
                    {products.map((prod)=>
                            (
                                <div className="col-sm-6 col-md-4 col-lg3" key={prod.id}>
                                    <ProductCard product={prod}/>
                                </div>
                            )

                    )}
                </div>
            </div>
        </section>
    );
}

export default Products;