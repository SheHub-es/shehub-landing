import { Button } from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/paths";

export function MainBannerCtaButton({ children }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(PATHS.registerForm)} variant="banner">
      {children}
    </Button>
  );
}

