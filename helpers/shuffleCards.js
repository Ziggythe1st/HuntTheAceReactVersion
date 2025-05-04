export function shuffleCards(cards) {
  // Create a deep copy so we don't mutate original state
  const shuffled = cards.map((card) => ({ ...card }));

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
