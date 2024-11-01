import Canvas from "./components/canvas";

const App = () => {
  return (
    <>
      <Canvas />
      <div id="overflowed">
        <h1>I LOVE YOU!</h1>
        <h1>{">_<"}</h1>
      </div>
    </>
  );
};

export default App;
