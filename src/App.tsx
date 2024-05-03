import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, home, personCircle, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/profile/profile';
import Click from './pages/clickcounter/clickcounter';
import Calculator from './pages/calculator/calculator';
import Todolist from './pages/todolist/Todolist';
import QuoteGenerator from './pages/quotegen/QuoteGen';
import Notes from './pages/notes/Notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/Home">
            <Home />
          </Route>
          
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/Click">
            <Click />
          </Route>

          <Route path="/calculator">
            <Calculator />
          </Route>

          <Route exact path="/Todolist">
            <Todolist />
          </Route>

          <Route exact path="/QuoteGen">
            <QuoteGenerator />
          </Route>

          <Route exact path="/Notes">
            <Notes />
          </Route>
          
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Blank" href="Blank">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircle} />
            <IonLabel>profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
