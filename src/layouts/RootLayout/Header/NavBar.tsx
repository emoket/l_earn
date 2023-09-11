import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  return (
    <StyledWrapper>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.gray10};
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      display: block;
      margin-left: 1rem;
      :hover {
        color: ${({ theme }) => theme.colors.gray12};
      }
    }
  }
`

// span {
//   cursor: pointer;

//   :hover {
//     color: ${({ theme }) => theme.colors.gray12};
//   }
// }
