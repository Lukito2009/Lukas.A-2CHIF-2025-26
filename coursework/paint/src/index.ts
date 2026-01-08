import './styles.css'
import { ShapeManager } from './ShapeManager';
import { ToolSelection } from './tool-selection'

const ToolSelectionWidget = new ToolSelection((toolType) => console.log(toolType));
const shapeManager = new ShapeManager();