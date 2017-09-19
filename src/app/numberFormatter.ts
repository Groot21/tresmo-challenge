
export function formatNumber(nbr: number): String {
  /** insert a dot after 3 digets 
      1234567 => 1.234.567 */
    return nbr.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }