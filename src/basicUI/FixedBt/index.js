import React from 'react'
import { Button } from 'semantic-ui-react'

function ImgPreview (props) {
  return (
      <Button onClick={() => setSidebarShow(!sidebarShow)}
        circular color='teal' icon='arrow up'>
      </Button>
      // <Button onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0}}
      //   circular color='teal'>22
      // </Button>
  )
}

export default React.memo(ImgPreview)