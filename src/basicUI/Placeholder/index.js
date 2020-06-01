import React from 'react'
import { Placeholder } from 'semantic-ui-react'

function CustomPlaceholder () {
  return (
    <div style={{ marginTop: '20px' }}>
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
    </div>
  )
}

export default React.memo(CustomPlaceholder)