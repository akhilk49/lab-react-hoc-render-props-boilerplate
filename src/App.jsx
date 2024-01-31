import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";
import HigherOrderComponent from "./components/HigherOrderComponent//HigherOrderComponent";
const LikePostH = HigherOrderComponent(LikeImage);
const LikeImageH = HigherOrderComponent(LikePost);

import RenderPropsComponent from "./components/RenderProps/RenderPropsComponent";
import LikeImageRender from "./components/RenderProps/LikeImageRender";
import LikePostRender from "./components/RenderProps//LikePostRender";

function App() {
  return (
    <div className="parent">
      <h3>Normal Components</h3>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>
      <h3>HOC</h3>
      <div className="hof buttons">
        <LikePostH />
        <LikeImageH />
      </div>
      <h3>Render Props</h3>
      <div className="render buttons">
        <RenderPropsComponent
          render={(count, incrementCount) => (
            <LikeImageRender count={count} incrementCount={incrementCount} />
          )}
        />
        <RenderPropsComponent
          render={(count, incrementCount) => (
            <LikePostRender count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;