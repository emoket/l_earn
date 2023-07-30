import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  const { projects } = CONFIG
  const hasService = projects?.length || false

  if (!hasService) return null

  return (
    <>
      <StyledTitle>
        <Emoji>🌟</Emoji> Service
      </StyledTitle>
      <StyledWrapper>
        {projects.map(({ href, name }, idx) => (
          <a key={idx} href={`${href}`} rel="noreferrer" target="_blank">
            <AiFillCodeSandboxCircle className="icon" />
            <div className="name">{name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray3};
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
