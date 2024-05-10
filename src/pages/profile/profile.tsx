import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton,
  IonActionSheet } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './profile.css';

const Profile: React.FC = () => {
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
      <img alt="Silhouette of mountains" src="https://raw.githubusercontent.com/saldivarAdiii/ionic-t-saldivar/main/src/assets/img/Adiblessed.jpeg" />
      <IonCardHeader>
        <IonCardTitle>adiii</IonCardTitle>
        <IonCardSubtitle>blessed</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>She was one of the women who had been "healed of evil spirits and ifirmities" and became a close associate of Christ.</IonCardContent>

      <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="She's 21"
          subHeader="Well done is better than well said :)"
          message="there are no regrets in life, just lessons
          -Jennifer Aniston"
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

export default Profile;
