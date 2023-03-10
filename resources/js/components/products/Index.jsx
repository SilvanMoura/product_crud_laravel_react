import React from "react";

const Index = () =>{
    return(
        <div className="container">
            <div className="products_list">

                <div className="titlebar">

                    <div className="titlebar_item">
                        <h1>Products</h1>
                    </div>

                    <div className="titlebar_item">
                        <div className="btn">
                            Add Product
                        </div>
                    </div>

                </div>

                <div className="table">

                    <div className="list_header">
                        <p>Imagem</p>
                        <p>Produto</p>
                        <p>Tipo</p>
                        <p>Inventário</p>
                        <p>Opções</p>
                    </div>

                    <div className="list_items">
                        <img src="" height="40px" />
                        <a>Nome do produto</a>
                        <p>Categoria</p>
                        <p>50</p>
                        <div>
                            <button className="btn-icon success">
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn-icon danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Index