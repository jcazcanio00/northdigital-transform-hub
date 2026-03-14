import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEO
        title="Página no encontrada | North Digital"
        description="La página que buscas no existe. Regresa al inicio de North Digital."
        url={`https://northmkt.com.mx${location.pathname}`}
      />
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold font-display text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Página no encontrada</p>
        <Link to="/" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
