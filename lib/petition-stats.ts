// Per Matthias's brief (Apr 23): hide the signature counter / progress
// bar until a credible threshold is reached. Once we cross 10,000, set
// CURRENT_SIGNATURES from a real source (CMS / DB) and ratchet the
// goal up to the next milestone (10K → 50K → 100K → 250K).

export const SIGNATURE_THRESHOLD = 10_000
export const CURRENT_SIGNATURES = 0 // raise once we have a credible figure
export const showSignatureCounter = (): boolean =>
  CURRENT_SIGNATURES >= SIGNATURE_THRESHOLD

export function nextGoal(current: number): number {
  for (const goal of [10_000, 50_000, 100_000, 250_000]) {
    if (current < goal) return goal
  }
  return 500_000
}
