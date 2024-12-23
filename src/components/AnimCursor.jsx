import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
  return (
    <AnimatedCursor
        innerSize={8}
      outerSize={8}
      color='228, 164, 189'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={20}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

    />
  )
}

export default AnimCursor

