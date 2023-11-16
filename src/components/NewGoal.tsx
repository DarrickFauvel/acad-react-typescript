import { FormEvent, useRef } from "react"

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const form = useRef(null)
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    event.currentTarget.reset()
    goal.current?.focus()
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
