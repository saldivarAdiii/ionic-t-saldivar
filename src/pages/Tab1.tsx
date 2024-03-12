import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton,
  IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">profile</IonTitle>
          </IonToolbar>

        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/Adiblessed.jpeg" />
      <IonCardHeader>
        <IonCardTitle>adiii</IonCardTitle>
        <IonCardSubtitle>blessed</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

      <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
        ></IonAlert>

<IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>

    </IonCard>

        


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
