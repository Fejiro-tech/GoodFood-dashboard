import Image from "next/image";
import chickenSaladImg from "./../../public/food1.png"
import chickenNoodlesImg from "./../../public/food5.png"
import smoothieImg from "./../../public/food4.png"
import chickenImg from "./../../public/food3.png"

const foods = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", image: chickenSaladImg },
  { name: "Chicken Noodles", price: "IDR 75.000", image: chickenNoodlesImg },
  { name: "Smoothie Fruits", price: "IDR 45.000", image: smoothieImg },
  { name: "Hot Chicken Wings", price: "IDR 45.000", image: chickenImg },
];

export default function FoodList() {
  return (
    <div className="bg-white py-10  px-4 lg:px-1">
      <h3 className="font-semibold mb-4">Most Ordered Food</h3>
      <p className="text-sm text-gray-500 mb-6">Adipiscing elit, sed do eiusmod tempor</p>

      <ul className="space-y-4">
        {foods.map((food, i) => (
          <li key={i} className="flex items-center gap-4 lg:gap-10">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
              <Image 
                src={food.image} 
                alt={food.name}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium">{food.name}</span>
            </div>
            <span className="text-sm text-gray-500">{food.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}