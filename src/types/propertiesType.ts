import { ZoomImageParams } from "can-zoom/zoomImageTypes";

export interface PropertiesArgs {
  states: ZoomImageParams;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClear: () => void;
}
