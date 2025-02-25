import Link from 'next/link';
import styled from 'styled-components';
import { OnePathType } from './GraphsProvider';

export type NavType = {
  allPaths: OnePathType[];
};

type BigStyledLi = {
  $isactive: boolean;
};

export default function Nav({ allPaths }: NavType) {
  return (
    <Header>
      <Logo>
        <span>Covid</span>Graphs
      </Logo>

      <NavUi>
        <ul>
          {allPaths?.map((pathData, index) => (
            <StyledLi key={index} $isactive={pathData.isActivePath}>
              <Link href={`/${pathData.onePath}`}>{pathData.navName}</Link>
            </StyledLi>
          ))}
          <AboutLi>
            <Link href='https://tomas-blog.vercel.app'>About</Link>
          </AboutLi>
        </ul>
      </NavUi>
    </Header>
  );
}

const StyledLi = styled.li<BigStyledLi>`
  ${({ $isactive }) => `
        
            border-top: 2px solid ${$isactive ? 'red' : 'transparent'};
        
    `}
  &:hover {
    border-top: 2px solid rgba(255, 0, 0, 0.3);
  }
`;

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  & > * {
    margin: 0;
    height: 60px;
    padding: 5px;
  }
`;

const Logo = styled.h1`
  line-height: 1.15;
  font-size: 2.5rem;
  color: red;

  span {
    color: #0070f3;
  }
`;

const NavUi = styled.nav`
  ul {
    height: 100%;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;

    li {
      text-transform: capitalize;
      padding-top: 5px;
    }

    li a {
      margin: 5px 15px;
      color: grey;
      text-decoration: none;
      font-size: 17px;

      &:hover {
        color: #000;
      }
    }
  }
`;

const AboutLi = styled.li`
  &:hover {
    border-top: 2px solid rgba(255, 0, 0, 0.3);
  }
`;
