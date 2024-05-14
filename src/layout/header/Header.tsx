import styled from 'styled-components';
import { Logo } from '../../components/ui/logo/Logo';
import { Menu } from '../../components/ui/menu/Menu';
import { SocialMedia } from '../../components/ui/socialMedia/SocialMedia';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo place="Header" />
      <MenuSocialWrapper>
        <MenuWrapper>
          <Menu place="Header" />
        </MenuWrapper>
        <SocialWrapper>
          <SocialMedia />
        </SocialWrapper>
      </MenuSocialWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 70px;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 5px;
`;

const MenuSocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-left: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
  gap: 50px;
  margin-right: 50px;
  @media (${({ theme }) => theme.media.medium}) {
    gap: 30px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
