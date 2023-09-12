import React from 'react'
import posts from './Cdata'
import { CardWrapper, CardPost, CardImg, CardContent, CardButton } from './StyledComponent/CardWrapper'

export default function Card() {
  return (
    <>  
      <CardWrapper>
        {posts.map((post) => {
          return (
            <CardPost key={post.id}>

              <CardImg>
                <img src={post.cover} alt='Card Images' />
              </CardImg>

              <CardContent>
                <a href='/singlepost'><h1>{post.title}</h1></a>
                <p>{post.desc}</p>
                <CardButton>Read More</CardButton>
              </CardContent>

            </CardPost>
          )
        })}
      </CardWrapper>
      
    </>
  )
}
