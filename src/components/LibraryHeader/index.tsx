import React, { useState } from "react";


const LibraryHeader = () => {
    const [selected, setSelected] = useState<string>()
    const orderOptions = ["Data de publicação"]
    const [order, setOrder] = useState<string>(orderOptions[0])
    const categorys = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"]


    return(
        <div className="library-header">
            <div className="app__flex category-list">
                {categorys.map((category, index) => {
                    return (
                        <button key={index} onClick={() => setSelected(category)} className={`category ${selected == category ? 'selected' : ''}`}>
                            {category}
                        </button>
                    )
                })}
            </div>
            <div className="app__flex order">
                <p>Ordenar por</p>
                <button className="order-button">
                    {order}
                </button>
            </div>
        </div>
    )
}

export default LibraryHeader;