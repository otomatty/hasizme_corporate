import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormButton,
} from "./Form.styled";

interface FormProps {
  onSubmit: (event: Event) => void;
}

function Form({ onSubmit }: FormProps) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormField>
        <FormLabel for="name">Name:</FormLabel>
        <FormInput type="text" id="name" name="name" required />
      </FormField>
      <FormField>
        <FormLabel for="email">Email:</FormLabel>
        <FormInput type="email" id="email" name="email" required />
      </FormField>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
}

export default Form;
