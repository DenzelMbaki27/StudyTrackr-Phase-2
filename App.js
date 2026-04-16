import { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import { store } from './redux/store';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import ProgressScreen from './screens/ProgressScreen';
import SettingsScreen from './screens/SettingsScreen';
import { initialTasks } from './data/mockTasks';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [quote] = useState({
    text: 'Stay focused and keep moving forward.',
    author: 'StudyTrackr'
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const progressValue = tasks.length ? completedCount / tasks.length : 0;

  const screenProps = useMemo(() => ({
    tasks,
    setTasks,
    progressValue,
    quote
  }), [tasks, progressValue, quote]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} {...screenProps} />}
          </Stack.Screen>
          <Stack.Screen name="Add Task">
            {props => <AddTaskScreen {...props} tasks={tasks} setTasks={setTasks} />}
          </Stack.Screen>
          <Stack.Screen name="Task Details">
            {props => <TaskDetailsScreen {...props} tasks={tasks} setTasks={setTasks} />}
          </Stack.Screen>
          <Stack.Screen name="Progress">
            {props => <ProgressScreen {...props} progressValue={progressValue} tasks={tasks} />}
          </Stack.Screen>
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
