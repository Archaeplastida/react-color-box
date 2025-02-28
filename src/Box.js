import React from "react";

const Box = (props) => {
    const remove = () => props.handleRemove(props.id);
    return (
        <div>
            <div
                style={{
                    height: `${props.height}em`,
                    width: `${props.width}em`,
                    backgroundColor: `${props.backgroundColor}`
                }}
            />
            <button onClick={remove}>Remove The Box!</button>
        </div>
    );
}

export default Box;
