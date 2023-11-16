import CourseGoal from "./CourseGoal.tsx"
import { type CourseGoal as CGoal } from "../App.tsx"

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
}

export default function CoarseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            onDelete={() => onDeleteGoal(goal.id)}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}
