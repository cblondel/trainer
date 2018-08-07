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

export class Workout {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: Array<ExercisePlan>,
    public description?: string
  ) {}
}

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: number
  ) {}
}
