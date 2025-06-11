import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface AnniversaryCounterProps {
  startDate: string; // A data de início do relacionamento no formato 'AAAA-MM-DD'
}

// Keyframes para a animação de pulso do coração
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const AnniversaryContainer = styled.div`
  text-align: center;
  margin: 2rem auto;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.081);
  font-family: "Arial", sans-serif;
  color: #333;
  position: relative;
  max-width: 800px;
  z-index: 10;

  @media (max-width: 768px) {
    margin: 2rem 1rem;
    padding: 2rem 1rem;
  }
`;

const MainText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0 0.5rem;
  }
`;

const CounterNumber = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  color: #e91e63;
  margin: 0 5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 1rem;
`;

const OptionalText = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeartIcon = styled.span`
  font-size: 2rem;
  color: #e91e63;
  animation: ${pulse} 1.5s infinite alternate;
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 8px;
  }
`;

export const AnniversaryCounter: React.FC<AnniversaryCounterProps> = ({
  startDate,
}) => {
  const calculateTime = () => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();

    // Cálculos para segundos, minutos, horas e dias totais
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    // Horas, minutos e segundos restantes
    const displaySeconds = totalSeconds % 60;
    const displayMinutes = totalMinutes % 60;
    const displayHours = totalHours % 24;

    // Cálculos para anos e meses (mais precisos)
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let daysInMonth = now.getDate() - start.getDate();

    if (daysInMonth < 0) {
      months--;
      const lastDayPrevMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      daysInMonth = lastDayPrevMonth + daysInMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years,
      months,
      days: daysInMonth, // Dias restantes no mês atual
      hours: displayHours,
      minutes: displayMinutes,
      seconds: displaySeconds,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [startDate]); // Recalcula se a data de início mudar

  return (
    <AnniversaryContainer>
      <MainText>
         eu te amo há
        <CounterNumber>{time.years}</CounterNumber> anos,
        <CounterNumber>{time.months}</CounterNumber> meses,
        <CounterNumber>{time.days}</CounterNumber> dias,
        <CounterNumber>{time.hours}</CounterNumber> horas, e
        <CounterNumber>{time.seconds}</CounterNumber> segundos!
      </MainText>
      <Cont>
        <OptionalText>E cada segundo tem sido um presente.</OptionalText>
        <HeartIcon role="img" aria-label="Coração pulsante">
          ❤️
        </HeartIcon>
      </Cont>
    </AnniversaryContainer>
  );
};
