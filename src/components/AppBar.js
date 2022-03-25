import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 12px;
`;

const ListItem = styled.li``;

export default function AppBar() {
  return (
    <div>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/songs">Songs</Link>
        </ListItem>
        <ListItem>
          <Link to="/dramas">Dramas</Link>
        </ListItem>
        <ListItem>
          <Link to="/actresses">Actresses</Link>
        </ListItem>
      </List>
    </div>
  );
}
