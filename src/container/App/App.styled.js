import styled from "styled-components";

export const StyledAppHeader = styled.header`
  padding: 60px;
`;

export const StyledAppHeaderNavigationBar = styled.div`
  display: flex;
  justify-content: space-between;

  .navigation-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search {
    cursor: pointer;
  }

  .search > input[type="text"] {
    border: none;
    outline: none;
    width: 0px;
    transition: width 0.3s;
  }

  .search > input[type="text"].open {
    padding: 5px 10px;
    width: 200px;
  }

  .navigation > ul {
    padding: 0px;
    margin: 0px;
    display: flex;
    list-style: none;
    margin-right: 10px;
    margin-left: 10px;
  }

  .navigation > ul > li {
    padding: 10px 20px;
    cursor: pointer;
  }

  .navigation > ul > li:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const StyledSignInButton = styled.button`
  color: white;
  border: none;
  padding: 10px 25px;
  background-color: #3b7844;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(59, 120, 68, 0.8);
  }
`;

export const StyledAppHeaderContent = styled.div`
  margin-top: 110px;

  .content-title {
    font-size: 48px;
    font-weight: 600;
  }

  .content-text {
    margin-top: 55px;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const StyledExploerButton = styled.button`
  margin-top: 65px;
  padding: 10px 25px;
  background-color: #3B7844;
  border: none;
  color: white;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;