import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton
} from '@ionic/react';
import './home.css';

const Home: React.FC = () => {
  // State for managing the list of tasks
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tasks[index];
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {/* Display the list of tasks */}
          {tasks.map((task, index) => (
            <IonItem key={index}>
              <IonLabel>{task}</IonLabel>
              <IonCheckbox slot="start" checked={false} onIonChange={() => toggleTask(index)} />
            </IonItem>
          ))}
        </IonList>
        {/* Input field to add new tasks */}
        <IonItem>
          <IonInput placeholder="New Task" value={newTask} onIonChange={(e) => setNewTask(e.detail.value!)} />
          <IonButton slot="end" onClick={addTask}>Add</IonButton>
        </IonItem>
        <br />
        <IonButton href='/home'>Back to Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
