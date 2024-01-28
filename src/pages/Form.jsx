import { useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import ActionButton from "../common/ActionButton";
import ActionButtons from "../common/ActionButtons";
import UserContext from "../contexts/UserContext";

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
    const methods = useForm();

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const onSubmit = (data) => {
        const user = {
            firstName: data.firstName,
            lastName: data.lastName
        }
        setCurrentUser(user);
    }

    const onError = (errors, e) => console.log(errors, e)

    const clearName = () => {
        setCurrentUser({firstName: "", lastName: ""});
        methods.reset();
    };

    const goBack = () => {
        history.back();
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

            Name: {`${currentUser.firstName} ${currentUser.lastName}`}
            <ActionButtons>
                <ActionButton action={goBack} text="< Back" />
                <ActionButton action={clearName} text="Clear Name" />
            </ActionButtons>
        </>
    )
};

export default Form;
