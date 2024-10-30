import ItemBg from "../assets/image/player.jpg";

interface ItemProps {
  first_name: string;
  last_name: string;
  number: string;
  position: string;
}

const PlayerCard: React.FC<ItemProps> = ({ 
  first_name,
  last_name,
  number,
  position,
}) => {
  return (
    <div className="group cursor-pointer ease-in-out duration-300 transition-all hover:bg-blue-700 relative rounded w-60 bg-white text-left overflow-hidden">
        <div className="flex flex-col justify-between h-80 m-3">
            <div className="text-gray-400 text-7xl font-bold"> { number } </div>
            <div className="text-blue-700 group-hover:text-white"> 
                <div className="text-md">
                    { first_name }
                </div>    
                <div className="text-xl font-bold uppercase">
                    { last_name }
                </div>    
                <div className="text-md mt-5">
                    { position }
                </div>    
            </div>
            <img src={ItemBg} className="w-56 object-cover absolute bottom-0 z-50 -right-20" alt="Player photo" />
        </div>
    </div>
  );
};

export default PlayerCard;
