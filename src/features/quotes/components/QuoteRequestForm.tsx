import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { validateQuoteForm } from "../utils/validateQuoteForm";
import { useQuote } from "../hooks/useQuote";

type FormData = {
  name: string;
  phone: string;
  mail: string;
};
type FormErrors = Partial<Record<keyof FormData, string>>;

const QuoteRequestForm = () => {
  const { createBudget, resetQuote } = useQuote();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    mail: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // 1️⃣ Actualiza el estado del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Limpia el error del campo mientras el usuario corrige
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // 2️⃣ Valida un solo campo cuando pierde el foco
  const handleBlur = (field: keyof FormData) => {
    const { errors } = validateQuoteForm(formData);

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: errors[field],
      }));
    }
  };

  // 3️⃣ Valida todo el formulario al enviar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validateQuoteForm(formData);

    if (!isValid) {
      setErrors(errors);
      return;
    }
    createBudget(formData);
    resetQuote();
    setFormData({
      name: "",
      phone: "",
      mail: "",
    });

  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="mx-auto px-6 py-11">
        <h2 className="font-semibold text-2xl mb-8">
          Demanar pressupostos
        </h2>

        <div className="grid grid-cols-4 gap-3">
          <Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              placeholder="Nom"
              className="placeholder:text-gray-300"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name}
              </p>
            )}
          </Label>

          <Label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              placeholder="Teléfon"
              className="placeholder:text-gray-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone}
              </p>
            )}
          </Label>

          <Label>
            <Input
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              onBlur={() => handleBlur("mail")}
              placeholder="Email"
              className="placeholder:text-gray-300"
            />
            {errors.mail && (
              <p className="text-red-500 text-xs mt-1">
                {errors.mail}
              </p>
            )}
          </Label>

          <Button type="submit" className="ml-6 bg-green-700">
            Afegir pressupostos <ArrowRight />
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default QuoteRequestForm;