import Fruit from "./Fruit";

// Rendering array or lists in React
export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Grapes"]

  const fruits = [
    { name: "Apple", price: "10", emoji: "🍎" },
    { name: "Mango", price: "1", emoji: "🥭" },
    { name: "Banana", price: "20", emoji: "🍌" },
    { name: "Orange", price: "4", emoji: "🟠" },
    { name: "Pineapple", price: "100", emoji: "🍍" },
  ];
  //   return(
  //   <div>
  // <ul>
  // {fruits.map((fruit) =>(
  //     <li key={fruit}>{fruit}</li>
  // ) )}
  // </ul>
  //   </div>
  //   )

  // list
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key= {fruit.name}> {fruit.emoji}{fruit.name} ${fruit.price}</li>
          <Fruit
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
