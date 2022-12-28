import Button from 'react-bootstrap/Button';

function SmallContact() {
    return (
        <div className="h-auto w-75 mx-auto rounded SmallContact InfoContainerColor p-3 mt-5 mb-5 d-flex justify-content-between align-items-center">
            
            <h4 className='fw-bold'>Share your NFT vision and get a quote.</h4>
            <Button variant="outline-primary" size="lg" className=' fs-4 px-5 text-white '>Contact Us</Button>
        </div>
    );
}

export default SmallContact;