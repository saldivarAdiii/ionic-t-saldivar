import React, { useState, useEffect, useRef } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  useIonToast
} from '@ionic/react';
import { trashOutline, pencilOutline } from 'ionicons/icons';
import './Todolist.css'; // Assuming you have a separate CSS file for styling

// Firebase
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; title: string; description: string; dateAdded: string; completed: boolean; }[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const inputRefTitle = useRef<HTMLIonInputElement>(null);
  const inputRefDescription = useRef<HTMLIonTextareaElement>(null);
  const [present] = useIonToast();

  const clearInput = () => {
    setNewTitle('');
    setNewDescription('');
    if (inputRefTitle.current && inputRefDescription.current) {
      inputRefTitle.current.setFocus();
    }
  };

  const addTodoToast = (position: 'middle') => {
    present({
      message: 'Added new Todo',
      duration: 1500,
      position: position,
    });
  };

  const editTodoToast = (position: 'middle') => {
    present({
      message: 'Changes Saved',
      duration: 1500,
      position: position,
    });
  };

  const deleteTodoToast = (position: 'middle') => {
    present({
      message: 'Todo deleted',
      duration: 1500,
      position: position,
    });
  };

  const addTodo = async () => {
    if (newTitle.trim() !== '') {
      if (editIndex !== null) {
        // Update existing todo
        // Implement if needed
      } else {
        const currentDate = new Date().toISOString();
        addTodoToast('middle');
        await addDoc(collection(db, 'todos'), {
          title: newTitle,
          description: newDescription,
          dateAdded: currentDate,
          completed: false // New field for tracking completion status
        });
      }
      clearInput();
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        description: doc.data().description,
        title: doc.data().title,
        dateAdded: doc.data().dateAdded,
        completed: doc.data().completed
      })));
    });
    return () => unsubscribe();
  }, []);

  const editTodo = (index: number) => {
    setEditIndex(index);
    const editedTodo = todos[index];
    setNewTitle(editedTodo.title);
    setNewDescription(editedTodo.description);
  };

  const updateTodo = async () => {
    if (editIndex !== null) {
      editTodoToast('middle');
      const todoToUpdate = todos[editIndex];
      await updateDoc(doc(db, 'todos', todoToUpdate.id), {
        title: newTitle,
        description: newDescription,
      });
      clearInput();
      setEditIndex(null);
    }
  };

  const cancelEdit = () => {
    clearInput();
    setEditIndex(null);
  };

  const deleteTodo = async (index: number) => {
    deleteTodoToast('middle');
    const todoToDelete = todos[index];
    await deleteDoc(doc(db, 'todos', todoToDelete.id));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonInput
                placeholder="Enter task"
                label="Add Todo"
                labelPlacement="floating"
                value={newTitle}
                onIonInput={(e) => setNewTitle(e.detail.value!)}
                ref={inputRefTitle}
              ></IonInput>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={editIndex !== null ? updateTodo : addTodo}>
                  {editIndex !== null ? 'Update' : 'Add'}
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" fill="clear" onClick={editIndex !== null ? cancelEdit : clearInput}>
                  {editIndex !== null ? 'Cancel' : 'Clear'}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        {/* Todo list output */}
        <br></br>
        <IonItemDivider color="light">
          <IonLabel>Todos</IonLabel>
        </IonItemDivider>
        <IonList>
          {todos
            .slice()
            .sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime())
            .map((todo, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{todo.title}</h2>
                  <p>{todo.description}</p>
                  <p>{new Date(todo.dateAdded).toLocaleString()}</p>
                </IonLabel>
                <IonButton fill="clear" onClick={() => editTodo(index)}>
                  <IonIcon icon={pencilOutline} />
                </IonButton>
                <IonButton fill="clear" onClick={() => deleteTodo(index)}>
                  <IonIcon icon={trashOutline} />
                </IonButton>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Todos;