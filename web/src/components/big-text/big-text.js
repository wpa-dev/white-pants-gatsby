import React from 'react'
import { Container, Content } from './big-text.css'
import BlockContent from 'components/block-content'

const BigText = (props) => (
  <Container color="#000">
    <Content>
      <BlockContent blocks={props.blocks}/>
    </Content>
  </Container>
)

export default BigText