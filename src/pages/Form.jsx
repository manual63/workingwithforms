import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

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

// Organizing buttons under a heading to test passing in child components
const ActionButtons = ({ children }) => {
    return (
        <>
            <h3>Action Buttons</h3>
            <div>{children}</div>
        </>
    )
}

// Nested inputs is why you would use the useFormContext() method
const FormInputs = () => {
    const { register } = useFormContext() // retrieve all hook methods
    return (
        <>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
        </>
    )
}

const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState("");
    const methods = useForm();

    const onSubmit = (data) => {
        setName(`${data.firstName} ${data.lastName}`);
    }

    const onError = (errors, e) => console.log(errors, e)

    const clearName = () => {
        setName("");
        reset();
    };

    const resetName = () => {
        setName("Shad Holland");
        reset();
    };

    return (
        <>
            <h1>Test Form</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                    <FormInputs />
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>

            Name: {name}
            <ActionButtons>
                <ActionButton action={resetName} text="Reset Name" />
                <ActionButton action={clearName} text="Clear Name" />
            </ActionButtons>
        </>
    )
};

export default Form;
