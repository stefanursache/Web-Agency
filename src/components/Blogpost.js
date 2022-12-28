import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/logo192.png'
import Button from 'react-bootstrap/esm/Button';
function BlogPost() {
    return (
        <div className="blogpost pb-3 mt-5 mb-5 d-block InfoContainerColor rounded shadow">
             <img className="BlogPostImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" />
                     
            <div className='p-3 d-block'> 
            <h4 className='pt-4 fw-bold '>Some Article</h4>
                <p>We develop custom smart contracts compatible with OpenSea. Collect royalties.</p>
                <Button variant="outline-primary" size="lg" className=' fs-6  text-white '>Found more </Button>
                        
            </div>
        </div>
    );
}

export default BlogPost;