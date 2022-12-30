import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/logo192.png';
import { motion } from "framer-motion";
import InfoContainer from './InfoContainer';
export default function Service  (image, titlee, descriptions)  {

    let boxAnimation = {}, boxAnim = {}, boxAnime = {};
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
        return (

            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .2, delay: .2 }} class="col-sm">
                <InfoContainer Image={image} title={titlee} description={descriptions} />
            </motion.div>
        )
    }
    else{
        return (

            <motion.div
            initial={{ opacity: 1, scale: 1 }}
             class="col-sm">
                <InfoContainer Image={image} title={titlee} description={descriptions} />
            </motion.div>
        )
    }
    
}
