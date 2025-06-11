import { MainContainer } from "./styles";
import { HeroSection } from "../Hero/HeroSection";
import { PolaroidSection } from "../Polaroid/PolaroidSection";
import { SpotifySection } from "../Spotify/SpotifySection";
import { LoveSection } from "../Love/LoveSection";
import { AnniversaryCounter } from "../Anniversary/AnniversarySection";
const relationshipStartDate = "2023-03-09";
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <HeroSection />
      <AnniversaryCounter startDate={relationshipStartDate} />
      <PolaroidSection />
      <SpotifySection />
      <LoveSection />
    </MainContainer>
  );
};
