import { motion } from 'framer-motion'

const Header = () => {
    return(
        <motion.div initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='app__flex header-container'>
            <img src="logo.png" alt="" />
        </motion.div>
    )
}

export default Header;