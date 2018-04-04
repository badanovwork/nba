export interface Players {
  favorite: boolean;
  link: string;
  name: string;
  teamAcronym: string;
  teamName: string;
  gamesPlayed: number;
  minutesPerGame: number;
  fieldGoalsAttemptedPerGame: number;
  fieldGoalsMadePerGame: number;
  fieldGoalPercentage: number;
  freeThrowPercentage: number;
  threePointAttemptedPerGame: number;
  threePointMadePerGame: number;
  threePointPercentage: number;
  pointsPerGame: number;
  offensiveReboundsPerGame: number;
  defensiveReboundsPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
  turnoversPerGame: number;
  playerEfficiencyRating: number;
}
