import { Route, Router } from "@solidjs/router";
import type { Component } from 'solid-js';
import styles from './App.module.css';
import About from "./components/about";
import logo from './logo.svg';
import { MetaProvider } from "@solidjs/meta"
const Home = () => {
   return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}
const App: Component = () => {
  return (
    <MetaProvider>
     <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    
      </Router>
    </MetaProvider>
  )
 
};

export default App;
