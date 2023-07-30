import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  const { github, instagram, email, linkedin, image, name, role, bio } =
    CONFIG.profile
  return (
    <StyledWrapper>
      {/* <div className="title">
        <Emoji>💻</Emoji> Profile
      </div> */}
      <div className="content">
        <div className="top">
          <Image src={image} fill alt="avatar" />
        </div>
        <div className="mid">
          <div className="name">{name}</div>
          <div className="role">{role}</div>
          {/* <div className="text-sm mb-2">{bio}</div> */}
          <div className="social">
            {github && (
              <a
                href={`https://github.com/${github}`}
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub className="icon" />
              </a>
            )}
            {linkedin && (
              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin className="icon" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                rel="noreferrer"
                target="_blank"
                css={{ overflow: "hidden" }}
              >
                <AiOutlineMail className="icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray3};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      position: relative;
      width: 100%;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      display: flex;
      padding: 0.25rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      .role {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .social {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          padding: 0.5rem;
          gap: 0.75rem;
          border-radius: 1rem;
          color: ${({ theme }) => theme.colors.gray11};
          cursor: pointer;

          :hover {
            color: ${({ theme }) => theme.colors.gray12};
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
      }
    }
  }
`
