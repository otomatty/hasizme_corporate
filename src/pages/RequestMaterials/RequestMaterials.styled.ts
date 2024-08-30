import { styled } from 'solid-styled-components';

export const RequestMaterialsContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MaterialSelection = styled.div`
  margin-bottom: 2rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const FormSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

export const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const GalleryItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const GalleryTitle = styled.h3`
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
`;
