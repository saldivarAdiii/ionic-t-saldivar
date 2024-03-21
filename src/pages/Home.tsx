import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

// CSS
//import './profile.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
      <h1>WELCOME TO MY HOMEPAGE</h1>
 

      <p>I am Adelyn L. Saldivar learning IONIC FRAMEWORK</p>
    </IonContent>
      </IonContent>
    </IonPage>
  );
};

//
export default Home;
