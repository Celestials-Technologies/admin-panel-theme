import React from 'react'

const MobileLogo = () => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" width="41" height="40"><defs><image  width="150" height="40" id="img1" href="data:image/png;base64,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"/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
  )
}

export default MobileLogo
