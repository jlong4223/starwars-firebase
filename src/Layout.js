import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Pages and components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { fetchStarships } from "./services/starwars-api";

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
  useEffect(() => {
    getAppData();
  }, []);

  const [appState, setAppState] = useState({
    sampleStarships: [],
    allStarShips: {
      count: null,
      next: null,
      previous: null,
      results: [],
    },
  });

  // slice just makes a copy, so we are grabbing the first 3 from the array for the sample
  async function getAppData() {
    const data = await fetchStarships();
    setAppState({
      allStarShips: data,
      sampleStarships: data.results.slice(0, 3),
    });
  }

  return (
    <StyledLayout>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage sampleStarships={appState.sampleStarships} />
          )}
        />
      </Switch>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
