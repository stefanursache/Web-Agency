import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/logo192.png'
function InfoItem() {
    return (
        <div className="h-auto w-auto pb-3 mt-5 mb-5 d-flex InfoContainerColor rounded shadow">
            <div className='infoItemCol1 d-flex justify-content-center'>
                <img className="InfoContainerPic rounder align-self-center " src={Image} alt="Italian Trulli" />
            </div>
            <div className='text-center d-block mx-auto'> 
            <h4 className='pt-4 fw-bold mx-auto'>Packed with advanced features</h4>
                <p>We develop custom smart contracts compatible with OpenSea. Collect royalties.</p>

            </div>
        </div>
    );
}

export default InfoItem;