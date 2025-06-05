import { useState } from 'react'

import './assets/articles.css'
import Article from './Article';

function App() {
  const articles = [{key:1,title:"what is react",content:"React is a JavaScript library developed by Meta for building user interfaces (UIs)."}
    ,{key:2,title:"why Should You code",content:"Learning to code offers numerous benefits, making it a valuable skill in today's world. It enhances problem-solving abilities, opens up career opportunities, and fosters creativity"}
  ,{key:3, title:"test" ,content:"testing is complete"}
  ];
const [search, setSearch] = useState('') ;
//when the user types in the search bar setSearch is changed to mark content
const handleInputChanges = (event)=>{
setSearch(event.target.value)
}

  return (
    <div className='container'>
    <input type='text' placeholder='search articles' value={search} onChange={handleInputChanges}/>
   <div className='articles'>
  
        {
          //maps throgh articles and display data
          articles.map((a) => {
          return (
            <Article 
              key={a.key}
              title={a.title}
              content={a.content}
              search={search}
            />
          )
        })}
      </div>
   
    </div>
  )
}

export default App
