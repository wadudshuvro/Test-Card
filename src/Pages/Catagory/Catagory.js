import React from 'react';
import ACard from '../../components/Shuvro/Cards';

function Catagory(props) {
    return (
        <div className="wrapper">
      <ACard
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="HTML"
        description="Card  1 Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <ACard
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="CSS"
      description=" Card 2 Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
      />


      <ACard
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="React"
      description=" Card 3 Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
      /> 
    </div>
    );
}

export default Catagory;