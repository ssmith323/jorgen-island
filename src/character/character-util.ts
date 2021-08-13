export function canAttack(attackRoll: number, defense: number): boolean {
  return attackRoll >= 20 || attackRoll > defense;
}
