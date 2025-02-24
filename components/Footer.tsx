import Link from 'next/link';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <StyledLink href='https://tomas-blog.vercel.app'>Tomáš Kučera</StyledLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  line-height: 1.15;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  padding: 5px;
  background: #fff;
  height: 31px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
