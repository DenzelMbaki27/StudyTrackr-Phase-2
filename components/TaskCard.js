import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

export default function TaskCard({ task, onPress }) {
  return (
    <Pressable style={[styles.card, task.completed && styles.completedCard]} onPress={() => onPress(task)}>
      <View style={styles.row}>
        <Text style={[styles.title, task.completed && styles.completedTitle]} numberOfLines={1}>{task.title}</Text>
        <Text style={styles.tag}>{task.subject}</Text>
      </View>
      <Text style={styles.description} numberOfLines={2}>{task.description}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.meta}>Due {task.dueDate}</Text>
        <Text style={styles.meta}>{task.progress}%</Text>
      </View>
      <ProgressBar value={task.progress / 100} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  completedCard: {
    opacity: 0.8,
    backgroundColor: '#EDE9FE',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    flex: 1,
    marginRight: 12,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  tag: {
    color: '#3730A3',
    fontWeight: '700',
  },
  description: {
    color: '#4B5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  meta: {
    color: '#6B7280',
    fontWeight: '600',
  },
});
