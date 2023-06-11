import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";
import InterFace from "./components/InterFace";

function App() {
  return (
    <>
    <Canvas camera={{position: [1, 1.5, 2.5], fov:50}} shadows>
      <Experience/>
    </Canvas>
     <InterFace/>
    </>
  );
}

export default App;


// https://www.youtube.com/watch?v=mdj7Z3PCxRg