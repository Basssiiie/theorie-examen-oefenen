import type { ImageComponent } from "./ImageComponent";
import type { ImageSource } from "./ImageSource";


/**
 * Image that can either be from a source file or a svelte component.
 */
export type Image = ImageSource | ImageComponent;