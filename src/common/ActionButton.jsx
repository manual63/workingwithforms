// A genaric button so it can be reused
const ActionButton = ({ action, text }) => {
    const buttonStyles = {
        padding: "5px 10px",
        margin: "10px"
    }

    return (
        <>
            <button style={buttonStyles} onClick={() => action()}>{text}</button>
        </>
    )
};

export default ActionButton;