import { useState } from "react"
import Header from "./components/Header.tsx"
import CourseGoal from "./components/CourseGoal.tsx"
import goalsImg from "./assets/goals.jpg"
import CoarseGoalList from "./components/CourseGoalList.tsx"
import NewGoal from "./components/NewGoal.tsx"

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number): void {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal />

      <CoarseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}