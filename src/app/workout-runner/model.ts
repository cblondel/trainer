export class Exercise {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public video?: Array<string>
  ) {}
}

export class WorkoutPlan {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: Array<ExercisePlan>,
    public description?: string
  ) {}

  totalWorkoutDuration(): number {
    const total = this.exercises.map(x => x.duration).reduce((accumulator, currentValue) => accumulator + currentValue);
    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
  }
}

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: number
  ) {}
}
