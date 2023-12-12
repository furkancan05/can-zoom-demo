import React from "react";
import ZoomImage from "can-zoom";
import Properties from "./components/Properties";
import { ZoomImageParams } from "can-zoom/zoomImageTypes";

export default function App() {
  const defaultImagePath: string =
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

  const [states, setStates] = React.useState<ZoomImageParams>({
    imagePath: defaultImagePath,
    scale: 2,
    maxScale: 4,
    width: 500,
    height: 500,
    backgroundColor: "",
    objectFit: "contain",
    cursor: "default",
    borderStyle: "none",
    borderWidth: undefined,
    borderColor: "",
    borderRadius: "",
  });

  // handle inputs
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStates({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStates({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  // clear all property inputs
  const handleClear = () => {
    const updatedState: any = {};
    Object.keys(states).forEach((state) => {
      updatedState[state] = "";

      switch (state) {
        case "objectFit":
          updatedState[state] = "contain";
          break;

        case "cursor":
          updatedState[state] = "default";
          break;

        case "borderStyle":
          updatedState[state] = "none";
          break;

        default:
          break;
      }
    });

    setStates(updatedState);
  };

  return (
    <div className="app">
      <Properties
        states={states}
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleClear={handleClear}
      />
      <div className="zoom-image">
        <ZoomImage
          imagePath={states.imagePath || defaultImagePath}
          scale={states.scale || 2}
          maxScale={states.maxScale || 4}
          width={states.width || 500}
          height={states.height || 500}
          backgroundColor={states.backgroundColor}
          objectFit={states.objectFit as ZoomImageParams["objectFit"]}
          cursor={states.cursor as ZoomImageParams["cursor"]}
          borderStyle={states.borderStyle as ZoomImageParams["borderStyle"]}
          borderWidth={states.borderWidth}
          borderColor={states.borderColor}
          borderRadius={states.borderRadius}
        />
      </div>
    </div>
  );
}
