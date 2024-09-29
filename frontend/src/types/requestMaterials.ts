export interface RequestMaterialsForm {
  selectedMaterial: string;
  name: string;
  email: string;
  message: string;
}

export interface RequestMaterialsErrors {
  material?: string;
  name?: string;
  email?: string;
}
