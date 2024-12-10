import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]), 
    addBox = boxObj => { setBoxes(allBoxes => [...allBoxes, boxObj]); }, 
    removeBox = id => { setBoxes(allBoxes => allBoxes.filter(box => box.id !== id)); };

    const cmps = boxes.map(box => <Box key={box.id} id={box.id} width={box.width} height={box.height} handleRemove={removeBox} backgroundColor={box.backgroundColor} />);

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {cmps}
        </div>
    );
}

export default BoxList;
