import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const newProduct = () => {
        navigate("/product/new");
    }

    useEffect(()=>{
        getProducts();
    })

    const getProducts = async () => {
        await axios.get("/api/getAllProducts")
        .then(({data})=>{
            setProducts(data.products);
        })
    }

    return(
        <div className="container">
            <div className="products_list">

                <div className="titlebar">

                    <div className="titlebar_item">
                        <h1>Produtos</h1>
                    </div>

                    <div className="titlebar_item">
                        <div className="btn" onClick={() => newProduct()}>
                            Adicionar produto
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

                    {
                        products.length > 0 && (
                            products.map((item, key)=>(
                                <div className="list_items" key={key}>
                                    <img src={`/upload/${item.photo}`} height="40px" />
                                    <a>{item.name}</a>
                                    <p>{item.type}</p>
                                    <p>{item.quantity}</p>
                                    <div>
                                        <button className="btn-icon success">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn-icon danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                    

                </div>

            </div>
        </div>
    )
}

export default Index