


function InfoContainer({title, description, Image}){
        return(
                <div className="hrem w-100 text-center pt-3 pb-3 px-2 rounded InfoContainerColor noscroll mt-5 mb-5 ">
                    <img className="InfoContainerPic rounder" src={Image} alt="Italian Trulli"/>
                    <h4 className='pt-4 fw-bold '>{title}</h4>
                    <p className='grey'>{description}</p>
                </div>
        );
}

export default InfoContainer;