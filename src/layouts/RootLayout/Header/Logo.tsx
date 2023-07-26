import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  const { title } = CONFIG.blog

  return (
    <StyledWrapper href="/" aria-label={title}>
      👨🏻‍💻 {title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
