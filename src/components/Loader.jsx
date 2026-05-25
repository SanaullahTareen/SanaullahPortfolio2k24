import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress, errors } = useProgress();
  
  if (errors.length > 0) {
    return (
      <Html center>
        <div className="text-red-500 text-center">
          <p>Error loading 3D model</p>
        </div>
      </Html>
    );
  }
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
