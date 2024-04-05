import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import './calculator.css';


const calculator: React.FC = () => {
  const [result, setResult] = useState<number | string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(result.toString()));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(prevResult => prevResult.toString() + value);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput value={result} readonly className="result-display"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            {[7, 8, 9, '/'].map(num => (
              <IonCol key={num}>
                <IonButton onClick={() => handleButtonClick(num.toString())}>{num}</IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[4, 5, 6, '*'].map(num => (
              <IonCol key={num}>
                <IonButton onClick={() => handleButtonClick(num.toString())}>{num}</IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[1, 2, 3, '-'].map(num => (
              <IonCol key={num}>
                <IonButton onClick={() => handleButtonClick(num.toString())}>{num}</IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[0, '.', '=', '+'].map(num => (
              <IonCol key={num}>
                <IonButton onClick={() => handleButtonClick(num === '=' ? '=' : num.toString())}>{num}</IonButton>
              </IonCol>
            ))}
            <IonCol>
              <IonButton onClick={() => handleButtonClick('C')}>C</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default calculator;
