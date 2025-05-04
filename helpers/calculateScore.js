export function calculateScore(round) {
  switch (round) {
    case 1:
      return 100;
    case 2:
      return 50;
    case 3:
      return 25;
    case 4:
      return 50;
    default:
      return 0;
  }
}
