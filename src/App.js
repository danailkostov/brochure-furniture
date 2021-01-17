import { Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from './components/Footer'

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Hero />
      </Grid>
      <Grid item>
        <Content />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
