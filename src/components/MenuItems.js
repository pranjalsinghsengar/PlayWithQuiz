import React from "react";
import styled from "styled-components";

const MenuItemContainer = styled.div`
  background: ${(props) => props.active ? "linear-gradient(to right, #b3f9dd,transparent)" : ""};
  font-size: 1.3rem;
  padding: 8px 0 8px 0;
  padding-left: 4rem;
  user-select: none;
  cursor: pointer;
`;
const MenuItems = ({ title, onClick, active }) => {
  return <MenuItemContainer active={active}  onClick={onClick}>{title}</MenuItemContainer>;
};

export default MenuItems;
