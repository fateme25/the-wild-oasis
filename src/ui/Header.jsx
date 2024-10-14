import { styled } from "styled-components";
import HeaderMenus from "./HeaderMenus";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenus />
    </StyledHeader>
  );
}

export default Header;
