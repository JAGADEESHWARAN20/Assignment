export const calculateCanvasPosition = (canvasRef, monitor) => {
    if (!canvasRef.current) {
        return { x: 0, y: 0 }; // Return a default position or handle the error as needed
    }
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const clientOffset = monitor.getClientOffset();
    if (!clientOffset) {
        return { x: 0, y: 0 }; // Return a default position or handle the error as needed
    }
    return {
        x: clientOffset.x - canvasRect.left,
        y: clientOffset.y - canvasRect.top,
    };
};