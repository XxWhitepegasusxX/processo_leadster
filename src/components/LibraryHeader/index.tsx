import React, { useState } from "react";
import { BiSolidDownArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';

const LibraryHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>()
    const orderOptions = ["Data de publicação", "Categoria", "Mais vistos"]
    const [order, setOrder] = useState<string>(orderOptions[0])
    const categorys = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"]

    function handleChoose(orderOption: string){
        setOrder(orderOption)
        setIsOpen(false)
    }

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
                    <button className={`order-button app__flex ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        {order}
                        <BiSolidDownArrow/>
                    </button>
                    {isOpen && (
                        <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                            {orderOptions.map((order, index) => (
                                <li onClick={() => handleChoose(order)} key={index}>{order}</li>
                            ))}
                        </motion.ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LibraryHeader;