import downloadImg from '../assets/download.png'
import starImg from '../assets//star.png'


const Allapp = ({allApp}) => {
    const {title, image, ratingAvg, downloads} = allApp;
    console.log(allApp)
    return (
        <div className=''>
            
            <div className="card bg-base-100 shadow-sm p-3 rounded h-[400px]">
  <figure className=''>
    <img className='rounded' src={image} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="">{title}</div>
    </h2>
    <p></p>
    <div className="flex justify-between items-center text-green-400 font-bold">
      <div className="flex gap-2 bg-gray-100 px-3 py-1 rounded">
        <img className='w-[20px] h-[20px]' src={downloadImg} alt="" />
 {downloads}
 </div>
      <div className="flex gap-2 bg-orange-100 px-3 py-1 rounded text-orange-400">
        <img className='w-[20px] h-[20px]' src={starImg} alt="" />
         {ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Allapp;