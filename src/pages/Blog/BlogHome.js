import React from 'react'
import BlogData from './BlogHomeData'
import Card from './Card'

import { BlogWrapper, Splash, Content, Text, SecondText, BlogList } from './StyledComponent/BlogWrapper'

export default function BlogHome() {

  return (
    <>
      <BlogWrapper>
        <Splash >
          {BlogData.map((props) => {
            return (
              <Content key={props.id}>
                <Text>
                  <h1>{props.titleOne}</h1>
                </Text>
                <SecondText>
                  <h1>{props.titletwo}</h1>
                  <p>{props.paraTwo}</p>
                </SecondText>

              </Content>
            )
          })}

        </Splash>
        <BlogList>
          <Card />
        </BlogList>
      </BlogWrapper>
    </>
  )
}
