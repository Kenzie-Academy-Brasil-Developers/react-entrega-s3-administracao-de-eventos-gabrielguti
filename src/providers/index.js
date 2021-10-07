import { WeddingProvider } from "./wedding";
import { PartyProvider } from "./party";
import { GraduationProvider } from "./graduation";

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
