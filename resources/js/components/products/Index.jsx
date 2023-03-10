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
    }, products)

    const getProducts = async () => {
        await axios.get("/api/getAllProducts")
        .then(({data})=>{
            setProducts(data.products);
        })
    }

    const editProduct = (id) => {
        navigate('/product/edit/'+id);
    }

    const deleteProduct = async (id) => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você não será capaz de reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apague!'
        })
        .then((result) =>{
            if(result.isConfirmed){
                axios.get('/api/deleteProduct/'+id)
                .then(()=>{
                    Swal.fire(
                        'Deletado!',
                        'Produto excluído com sucesso',
                        'success'
                    )
                    getProducts()
                })
                .catch(()=>{

                })
            }
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
                                        <button className="btn-icon success" onClick={()=>editProduct(item.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn-icon danger" onClick={()=>deleteProduct(item.id)}>
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