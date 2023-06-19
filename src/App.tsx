import MainHeader from "./Components/MainHeader";
import SideDrawer from "./Components/SideDrawer";

import * as Styles from "./App.Styles"

import Dashboard from "./Home/Dashboard";
function App() {
  return(
    <Styles.Container>
      <Styles.LeftContainer>
        <SideDrawer />
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <MainHeader />
        <Dashboard />
      </Styles.RightContainer>
    </Styles.Container>
  ) 
}

export default App;

