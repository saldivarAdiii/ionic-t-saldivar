import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonInput } from '@ionic/react';

import './calculator.css';

const calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleInput = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonContent fullscreen className="ion-padding" style={{ backgroundColor: 'dark' }}>
          <IonGrid>
          <IonRow>
            <IonCol size="12" style={{ height: '70px', fontSize: '60px', marginBottom: '30px', backgroundColor: 'rgb(25, 25, 25)' }}>
              <IonInput style={{ fontSize: '40px', color: 'white', marginTop: '7px' }} value={input} readonly={true} className="ion-text-right" />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonButton id="btns" expand="full" color="light" onClick={handleClear} style={{ fontSize: '20px', height: '50px'}}>C</IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton id="btns" expand="full" color="light" onClick={handleDelete} style={{ fontSize: '20px', height: '50px'}}>DEL</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('7')} style={{ fontSize: '20px'}}>7</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('8')} style={{ fontSize: '20px'}}>8</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('9')} style={{ fontSize: '20px'}}>9</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('/')} style={{ fontSize: '20px'}}>/</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('4')} style={{ fontSize: '20px'}}>4</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('5')} style={{ fontSize: '20px'}}>5</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('6')} style={{ fontSize: '20px'}}>6</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('*')} style={{ fontSize: '20px'}}>*</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('1')} style={{ fontSize: '20px'}}>1</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('2')} style={{ fontSize: '20px'}}>2</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('3')} style={{ fontSize: '20px'}}>3</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('-')} style={{ fontSize: '20px'}}>-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('.')} style={{ fontSize: '20px'}}>.</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('0')} style={{ fontSize: '20px'}}>0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('00')} style={{ fontSize: '20px'}}>00</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('+')} style={{ fontSize: '20px'}}>+</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton id="btns" expand="full" color="light" onClick={handleCalculate} style={{ fontSize: '20px', height: '50px'}}>=</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default calculator;