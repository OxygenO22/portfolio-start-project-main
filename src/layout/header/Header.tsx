import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { MenuData } from '../../components/menu/MenuData';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      {
        MenuData.map((data) => (
          <Menu key={data.id} path={data.path} name={data.name}/>
        ))
      }
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #41c720;
  display: flex;
  justify-content: space-between;
`
