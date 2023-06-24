import React, { useState } from "react";
import { BiSolidDownArrow } from 'react-icons/bi'

const LibraryHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>()
    const orderOptions = ["Data de publicação"]
    const [order, setOrder] = useState<string>(orderOptions[0])
    const categorys = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"]


    return(
        <div className="library-header app__flex">
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
                <div className="dropdown-menu">
                    <button className="order-button app__flex" onClick={() => setIsOpen(!isOpen)}>
                        {order}
                        <BiSolidDownArrow/>
                    </button>
                    {isOpen && (
                        <ul>
                            <li>Ordem</li>
                            <li>Ordem</li>
                            <li>Ordem</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LibraryHeader;