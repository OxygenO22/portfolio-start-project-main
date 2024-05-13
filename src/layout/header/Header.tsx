import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { MenuData } from '../../components/menu/MenuData';
import { SocialMedia } from '../../components/ui/socialMedia/SocialMedia';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <MenuSocialWrapper>
        <MenuWrapper>
          {MenuData.map((data) => (
            <Menu key={data.id} path={data.path} name={data.name} />
          ))}
        </MenuWrapper>
        <SocialWrapper>
          <SocialMedia />
        </SocialWrapper>
      </MenuSocialWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 70px;
`

const MenuSocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
  gap: 50px;
  margin-right: 50px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
