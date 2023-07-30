import styled from "@emotion/styled"
import React from "react"
import { HiMoon, HiSun } from "react-icons/hi2"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? <HiMoon /> : <HiSun />}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  :hover {
    color: ${({ theme }) => theme.colors.gray12};
  }
`
