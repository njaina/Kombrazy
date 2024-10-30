import ItemBg from "/item-bg.jpg";

interface ItemProps {
  title: string;
  subtitle: string;
  status: string;
  content: string;
}

const ItemCard: React.FC<ItemProps> = ({ 
  title,
  subtitle,
  status,
  content,
}) => {
  return (
    <div className="rounded w-60 border shadow bg-gray-100">
      <div className="flex gap-2 p-2 bg-gray-400 bg-opacity-15 items-center">
        <img
          src={ItemBg}
          alt="Profile photo"
          className="h-11 w-11 bg-black rounded-full object-cover border border-opacity-55 border-gray-300"
        />
        <div className="text-left">
          <div className="font-bold">{title}</div>
          <div className="text-xs">{subtitle}</div>
        </div>
      </div>
      <div className="overflow-hidden h-28 bg-red-400 bg-[url('/img/hero-pattern.svg')]">
        <img
          src={ItemBg}
          alt="Background alt"
          className="w-full h-full object-cover hover:scale-110 duration-300"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-end">
          <div className="cursor-pointer rounded px-2 py-1 border text-xs border-green-900 bg-green-600 text-white hover:bg-green-400 duration-300">
            {status}
          </div>
        </div>
        <div className="text-left"> {content} </div>
        <div className="flex justify-end mt-2 gap-2">
          <button className="">Edit</button>
          <button className="">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
