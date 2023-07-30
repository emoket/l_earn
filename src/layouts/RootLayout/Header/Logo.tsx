import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  const { title } = CONFIG.blog

  return (
    <StyledWrapper href="/" aria-label={title}>
      👨🏻‍💻 <span>{title}</span>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  span {
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
