import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

// Pages and components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import { fetchStarships } from "./services/starwars-api";
import { auth } from "./services/firebase";

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

    // this changes userstate based on a user logged in
    const unsubscribe = auth.onAuthStateChanged((user) =>
      setUserState({ user })
    );
    // the below helps with effiecentcy of ram
    return () => unsubscribe();
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

  // firebase state here
  const [userState, setUserState] = useState({
    user: null,
  });

  // slice just makes a copy, so we are grabbing the first 3 from the array for the sample
  async function getAppData() {
    const data = await fetchStarships();
    setAppState({
      allStarShips: data,
      sampleStarships: data.results.slice(0, 3),
    });
  }

  // pagination helper function - we are spreading prevstate to keep old data and then add more to it
  async function getNextOrPrev(pageURL) {
    const data = fetchStarships(pageURL);
    setAppState((prevState) => ({
      ...prevState,
      allStarShips: data,
    }));
  }

  return (
    <StyledLayout>
      <Header user={userState.user} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage sampleStarships={appState.sampleStarships} />
          )}
        />
        <Route
          exact
          path="/starships"
          render={(props) =>
            // if there is a user, allow them to see a certain page
            userState.user ? (
              <IndexPage
                allStarShips={appState.allStarShips.results}
                getNextOrPrev={getNextOrPrev}
                next={appState.allStarShips.next}
                prev={appState.allStarShips.previous}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
