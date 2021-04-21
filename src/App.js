import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
   const Products=[
     {name:'illustrator', price:'99.00$'},
     {name:'Photo', price:'100$'},
     {name:'design', price:'100$'},
     {name:'editing', price:'100$'},
     {name:'animator', price:'100$'}
   ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    {Products.map(pd=><Product Product ={pd
    } ></Product>)}
    <Counter></Counter>
    <LoadData></LoadData>
      </header>
    </div>
  );
  
}



function Product(props){
  const style={
    width:'200px',
    height:'200px',
    border:'2px solid gold ',
    backgroundColor:'gray',
    marginTop:'20px',
    display:'float'
  }
  console.log('ckd',props.Product);
  
  return(
    <div style={style}>
      <h2>{props.Product.name}</h2>
     <h3>price:{props.Product.price}</h3>
    </div>
  )
}

//state
function Counter(){
  const [count,setCount]= useState(10);
//  const  increaseCount =()=>setCount(count+1);
  return(<div>
  <h1>count:{count}</h1> 
  <button onMouseMove={()=>setCount(count+1)}>increase</button> 
  <button onClick={()=>setCount(count-1)} >decrease </button>
  </div>
  )
}

//call api
function LoadData (){
  const style={
    border:'1px solid red',
    margin:'5px',

  }
  const [posts,setPost] =useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>setPost(data))
},[]
)
  return(<div >
    <h1>Posts</h1>
    <ul>
      {
        posts.map(post=><li style={style}>{post.title}</li>)
      }
      <p style={{border:"1px solid red"}}> { posts.map(body =>body.body) } </p>
    </ul>
    </div>
  )
}

export default App;
