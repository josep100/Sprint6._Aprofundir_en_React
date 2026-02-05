import { Link } from "react-router-dom";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <Card className="max-w-3xl p-10 text-center space-y-6">
        <h1 className="text-2xl font-bold">
          Calcula el teu pressupost en segons
        </h1>

        <p className="text-gray-600 text-lg">
          Una eina senzilla per crear pressupostos personalitzats de serveis
          digitals segons les teves necessitats.
        </p>

        <ul className="text-left text-gray-700 space-y-2">
          <li>✔ Selecciona serveis com SEO, Ads o Web</li>
          <li>✔ Personalitza opcions com pàgines i idiomes</li>
          <li>✔ Visualitza el preu total en temps real</li>
          <li>✔ Aplica un descompte anual del 20%</li>
          <li>✔ Guarda i consulta els pressupostos creats</li>
        </ul>

        <Link to="/calculator">
          <Button className="mt-6 bg-green-700">
            Anar a la calculadora
          </Button>
        </Link>
      </Card>
    </main>
  );
};

export default WelcomePage;