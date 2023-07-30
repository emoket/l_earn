import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { HiArrowLeft, HiArrowUp } from "react-icons/hi2"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>
        <HiArrowLeft />
      </a>
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <HiArrowUp />
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    font-size: x-large;
    margin-top: 0.75rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
