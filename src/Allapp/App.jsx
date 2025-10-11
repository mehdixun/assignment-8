import downloadImg from '../assets/download.png'
import starImg from '../assets//star.png'
import { Link } from 'react-router';


const Allapp = ({allApp}) => {
    const {title, image, id,  ratingAvg, downloads} = allApp;
    
    return (
        <div className='transition-transform duration-300 hover:scale-105'>
            
            <Link to={`/appdetail/${id}`}>
            <div className="card bg-base-100 shadow-sm p-3 rounded-xl h-[280px] lg:h-[380px]">
  <figure className=''>
    <img className='rounded h-[100px] lg:h-[200px]' src={image} alt="" />
  </figure>
  <div className="">
    <h2 className="text-center text-xl">
      
      <div className="font-bold my-5">{title}</div>
    </h2>
    <p></p>
    <div className="flex justify-between items-center text-green-400 font-bold">
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
        <img className='w-[15px] h-[15px]' src={downloadImg} alt="" />
 {downloads}
 </div>
      <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded text-orange-300">
        <img className='w-[15px] h-[15px]' src={starImg} alt="" />
         {ratingAvg}</div>
    </div>
  </div>
</div>
            </Link>
        </div>
    );
};

export default Allapp;