type FormData = {
  name: string;
  phone: string;
  mail: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const patterns = {
  name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  phone: /^\+?\d{9,15}$/,
  mail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const validateQuoteForm = (data: FormData) => {
  const errors: Errors = {};

  if (!patterns.name.test(data.name)) {
    errors.name = "Nombre no válido";
  }

  if (!patterns.phone.test(data.phone)) {
    errors.phone = "Teléfono no válido";
  }

  if (!patterns.mail.test(data.mail)) {
    errors.mail = "Email no válido";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};