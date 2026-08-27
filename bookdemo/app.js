import Book from "./book.js"
const bookdata=[
    {image: "",title:"ReactJS",price: 465},
    {image: "",title:"NodeJS",price: 578},
    {image: "",title:"ExpreeJS",price: 963},
     {image: "",title:"ReactJS",price: 465},
    {image: "",title:"NodeJS",price: 578},
    {image: "",title:"ExpreeJS",price: 963},
]
function App(){
    const bookstore=bookdata.map((b)=>{
      return Book(b)
    })
    const div=React.createElement("div",
        {className:"bookstore"},[...bookstore]
    )
    return div;
}

export default App;