// Organizing buttons under a heading to test passing in child components
const ActionButtons = ({ children }) => {
    return (
        <>
            <h3>Action Buttons</h3>
            <div>{children}</div>
        </>
    )
};

export default ActionButtons;