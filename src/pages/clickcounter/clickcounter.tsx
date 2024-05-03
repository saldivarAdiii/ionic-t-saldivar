import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import './clickcounter.css';

const clickcounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      <IonContent fullscreen className="ion-padding">
        <h2>Clicks: {count}</h2>
        <IonButton onClick={incrementCount}>Click Counter</IonButton>
        <IonButton onClick={resetCount}>Restart</IonButton>
        <br />
        <br />
        <IonButton href='/home'>Back to Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default clickcounter;
