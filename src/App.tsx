import React, { FC, Suspense } from "react";

import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const Home = React.lazy(() => import("./sections/Home"));
const About = React.lazy(() => import("./sections/About"));
const Contact = React.lazy(() => import("./sections/Contact"));

const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <Nav />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </Suspense>
  </div>
);

export default App;
