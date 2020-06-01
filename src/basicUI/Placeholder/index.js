import React from 'react'
import { Segment, Placeholder } from 'semantic-ui-react'

function CustomPlaceholder () {
  return (
    <Segment>
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  )
}

export default React.memo(CustomPlaceholder)