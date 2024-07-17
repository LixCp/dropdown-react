import React, { useState } from 'react';
import data from './data'
import Question from './commponents/Question'



function App() {
  const [infos,setInfos] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {
            infos.map(item =>(
              <Question key={item.id} {...item} />
            ))
          }
        </section>
      </div>
    </main>
  );
}

export default App;
