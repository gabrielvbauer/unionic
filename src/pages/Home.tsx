import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  IonSpinner,
  IonText,
  IonTitle,
} from "@ionic/react";

import LogoImg from "../assets/logo.png";

type Screw = {
  id: number;
  tipo: string;
  diametro: number;
  comprimento: number;
  material: string;
  resistenciaMecanica: string;
  aplicacao: string;
};

export function Home() {
  const [screws, setScrews] = useState<Screw[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/parafusos");
      const data: Screw[] = await response.json();
      setScrews(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <IonContent>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <IonTitle>Bem-vindo ao Meu Site</IonTitle>
          <IonText>Este é um parágrafo de exemplo</IonText>
          <div>
            <IonButton>Clique Aqui</IonButton>
          </div>

          <IonTitle>Seção importante</IonTitle>
          <IonText>Esta é um seção com conteúdo relevante</IonText>

          <IonImg
            src={LogoImg}
            style={{
              width: 500,
            }}
          />

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {screws ? (
              screws?.map((screw: Screw) => (
                <IonCard key={screw.id} style={{ flex: 1 }}>
                  <IonCardHeader>
                    <IonCardTitle>{`Parafuso ${screw.id}: ${screw.tipo}`}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <div>
                      <strong>Diâmetro:</strong> {screw.diametro} mm
                    </div>
                    <div>
                      <strong>Comprimento:</strong> {screw.comprimento} mm
                    </div>
                    <div>
                      <strong>Material:</strong> {screw.material}
                    </div>
                    <div>
                      <strong>Resistência Mecânica:</strong>{" "}
                      {screw.resistenciaMecanica}
                    </div>
                    <div>
                      <strong>Aplicação:</strong> {screw.aplicacao}
                    </div>
                  </IonCardContent>
                </IonCard>
              ))
            ) : (
              <IonSpinner />
            )}
          </div>
        </div>
      </IonContent>
    </>
  );
}
