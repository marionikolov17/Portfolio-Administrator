export function sortIconsByQuery(iconKeys: string[], query: string) {
  return iconKeys.sort((a, b) => {
    // Convert both the icon key and the query to lowercase for case-insensitive comparison
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    const lowerQuery = query.toLowerCase();

    // Exact match goes first
    if (lowerA === lowerQuery) return -1;
    if (lowerB === lowerQuery) return 1;

    // Check if the query is a prefix of the icon key
    const aStartsWithQuery = lowerA.startsWith(lowerQuery);
    const bStartsWithQuery = lowerB.startsWith(lowerQuery);
    if (aStartsWithQuery && !bStartsWithQuery) return -1;
    if (!aStartsWithQuery && bStartsWithQuery) return 1;

    // Check if the query is contained within the icon key
    const aContainsQuery = lowerA.includes(lowerQuery);
    const bContainsQuery = lowerB.includes(lowerQuery);
    if (aContainsQuery && !bContainsQuery) return -1;
    if (!aContainsQuery && bContainsQuery) return 1;

    // If both or neither contain the query, fall back to alphabetical order
    return lowerA.localeCompare(lowerB);
  });
}
