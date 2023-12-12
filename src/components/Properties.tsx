import { PropertiesArgs } from "../types/propertiesType";

export default function Properties({
  states,
  handleInput,
  handleSelect,
  handleClear,
}: PropertiesArgs) {
  return (
    <div className="properties">
      <div className="properties-container">
        <h1 className="properties-title">Properties</h1>
        <section>
          <p>scale:</p>
          <input
            type="text"
            name="scale"
            value={states.scale}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>maxScale:</p>
          <input
            type="text"
            name="maxScale"
            value={states.maxScale}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>width:</p>
          <input
            type="text"
            name="width"
            value={states.width}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>height:</p>
          <input
            type="text"
            name="height"
            value={states.height}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>backgroundColor:</p>
          <input
            type="text"
            name="backgroundColor"
            value={states.backgroundColor}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>imagePath:</p>
          <input
            type="text"
            name="imagePath"
            value={states.imagePath}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>objectFit:</p>
          <select
            name="objectFit"
            defaultValue="contain"
            value={states.objectFit}
            onChange={(e) => handleSelect(e)}
          >
            <option value="none">none</option>
            <option value="contain">contain</option>
            <option value="cover">cover</option>
            <option value="fill">fill</option>
            <option value="inherit">inherit</option>
            <option value="initial">initial</option>
            <option value="revert">revert</option>
            <option value="revert-layer">revert-layer</option>
            <option value="unset">unset</option>
            <option value="scale-down">scale-down</option>
          </select>
        </section>
        <section>
          <p>cursor:</p>
          <select
            name="cursor"
            defaultValue="default"
            value={states.cursor}
            onChange={(e) => handleSelect(e)}
          >
            <option value="none">none</option>
            <option value="auto">auto</option>
            <option value="default">default</option>
            <option value="context-menu">context-menu</option>
            <option value="help">help</option>
            <option value="pointer">pointer</option>
            <option value="progress">progress</option>
            <option value="wait">wait</option>
            <option value="cell">cell</option>
            <option value="crosshair">crosshair</option>
            <option value="none">none</option>
            <option value="text">text</option>
            <option value="vertical-text">vertical-text</option>
            <option value="alias">alias</option>
            <option value="copy">copy</option>
            <option value="move">move</option>
            <option value="no-drop">no-drop</option>
            <option value="not-allowed">not-allowed</option>
            <option value="grab">grab</option>
            <option value="grabbing">grabbing</option>
            <option value="e-resize">e-resize</option>
            <option value="n-resize">n-resize</option>
            <option value="ne-resize">ne-resize</option>
            <option value="nw-resize">nw-resize</option>
            <option value="s-resize">s-resize</option>
            <option value="sw-resize">sw-resize</option>
            <option value="w-resize">w-resize</option>
            <option value="ew-resize">ew-resize</option>
            <option value="ns-resize">ns-resize</option>
            <option value="nesw-resize">nesw-resize</option>
            <option value="none">none</option>
            <option value="nwse-resize">nwse-resize</option>
            <option value="col-resize">col-resize</option>
            <option value="row-resize">row-resize</option>
            <option value="all-scroll">all-scroll</option>
            <option value="zoom-in">zoom-in</option>
            <option value="zoom-out">zoom-out</option>
          </select>
        </section>
        <section>
          <p>borderStyle:</p>
          <select
            name="borderStyle"
            defaultValue="none"
            value={states.borderStyle}
            onChange={(e) => handleSelect(e)}
          >
            <option value="none">none</option>
            <option value="solid">solid</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="hidden">hidden</option>
          </select>
        </section>
        <section>
          <p>borderWidth:</p>
          <input
            type="text"
            name="borderWidth"
            value={states.borderWidth}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>borderColor:</p>
          <input
            type="text"
            name="borderColor"
            value={states.borderColor}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section>
          <p>borderRadius:</p>
          <input
            type="text"
            name="borderRadius"
            value={states.borderRadius}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <button type="button" onClick={() => handleClear()}>
          Clear All
        </button>
      </div>
    </div>
  );
}
