import './InfoCard.css'
const InfoCard = () => {
    return (
        <div className="cards-box bg-[rgb(8,26,22)] py-28 -mt-2">
            <div className="border border-[#1eac9b70] rounded-xl"> 
            <div className="cards space-y-6 title-text">
                <h1 className="text-5xl text-center text-white">Total worth</h1>
                <p className=" text-6xl text-[#C28563]">$ 52.5B+</p>
            </div>    
           </div>
            <div className="border border-[#1eac9b70] rounded-xl"> 
            <div className="cards space-y-6 title-text">
                <h1 className="text-5xl text-center text-white">Properties</h1>
                <p className=" text-6xl text-[#C28563]"> 79+</p>
            </div>    
           </div>
            <div className="border border-[#1eac9b70] rounded-xl"> 
            <div className="cards space-y-6 title-text">
                <h1 className="text-5xl text-center text-white">Stuffs</h1>
                <p className=" text-6xl text-[#C28563]">200+</p>
            </div>    
           </div>
            
            
            
        </div>
    );
};

export default InfoCard;