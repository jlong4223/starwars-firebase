import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Pages and components
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

// double backtick is a tagged template literal, we put our css styles in them
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex-grow: 1;
  }
`;

function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            <HomePage />;
          }}
        />
      </Switch>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
