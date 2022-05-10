interface NodeLayout {
    left: number;
    top: number;
    width: number;
    height: number;
}
declare class VisualDebugger {
    private debugCtx;
    private layoutsCtx;
    constructor();
    static createCanvas(id: string, zIndex: string): CanvasRenderingContext2D;
    clear(): void;
    clearLayouts(): void;
    drawLayout(layout: NodeLayout, focusKey: string, parentFocusKey: string): void;
    drawPoint(x: number, y: number, color?: string, size?: number): void;
}
export default VisualDebugger;
