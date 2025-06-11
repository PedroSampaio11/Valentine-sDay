// src/components/SpotifyPlayer/index.tsx
import React from "react";
import styled from "styled-components";

// --- Estilos para o Container do Player ---
const Container = styled.section`
  width: 100%;
  min-height: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;

  iframe {
    width: 50%;
    height: 177px;
    border-radius: 12px;
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    gap: 1.5rem;

    iframe {
      width: 100%;
      height: 222px;
    }
  }
`;

const Msg = styled.div`
  width: 40%;
  text-align: left;

  p {
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    p {
      font-size: 2.2rem;
      font-weight: 500;
    }
  }
`;

// --- Componente React do Player do Spotify ---
export const SpotifySection: React.FC = () => {
  return (
    <Container>
      <Msg>
        <p>
          Nosso som para o nosso Dia. Que ela te lembre do quanto você é
          especial. ❤️
        </p>
      </Msg>

      <iframe
        src="https://open.spotify.com/embed/track/6CLVh9sekZ1p2G8Tfhhj8h?utm_source=generator"
        width="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Spotify Player - All That Matters"
      />
    </Container>
  );
};
