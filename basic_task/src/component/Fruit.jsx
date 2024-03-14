// passing one component to another
// export default function Fruit({name, emoji, price}) {
//   return (
//     <div>
//         <li>
//       {emoji} {name} {price}
//       </li>
//     </div>
//   );
// }


// Conditionally Rendering List Items
export default function Fruit({name, emoji, price}) {
    return (
      <>
          {price>5 ? <li> {emoji} {name} {price} </li> : ""}
      </>
    );
  }

//   fragment-<> </>
