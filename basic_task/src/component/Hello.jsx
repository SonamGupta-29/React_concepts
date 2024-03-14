// component
// function Hello() {
//     return <h1>Component</h1>;
// }

// export default Hello;

// props
// function Hello(props) {
//     console.log(props)
//     return(
//    <div>
//      <h1>Hello! {props.name} {props.message}</h1>
//    </div>
//    )
// }

// export default Hello;

// destructuring props
// function Hello({name, message, emoji}) {
//     return(
//    <div>
//      <h1>Hello! {name} {message} {emoji}</h1>
//    </div>
//    )
// }

// export default Hello;

// passing array and object to components using props
function Hello(props) {
    const arr = [4, 7, 8]
    return(
   <div>
     <h1>Hello! {props.person.name} {props.person.occupation}</h1>
   </div>
   )
}

export default Hello;