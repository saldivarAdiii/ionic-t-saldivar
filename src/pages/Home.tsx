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
 

      <p>Here's a small text description for the content. Nothing more, nothing less.</p>
    </IonContent>
      </IonContent>
    </IonPage>
  );
};

//
export default Home;
