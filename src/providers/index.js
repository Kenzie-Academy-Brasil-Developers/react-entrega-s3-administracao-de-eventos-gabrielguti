import { WeddingProvider } from "./casamento";
import { PartyProvider } from "./confraternização";
import { GraduationProvider } from "./formatura";

const Providers = ({ children }) => {
  return (
    <WeddingProvider>
      <PartyProvider>
        <GraduationProvider>{children}</GraduationProvider>
      </PartyProvider>
    </WeddingProvider>
  );
};

export default Providers;
