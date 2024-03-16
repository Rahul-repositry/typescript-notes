export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  const paddedMinutes = minutes.toString().padStart(2, "0"); // Pad minutes with leading zero if needed
  const paddedSeconds = seconds.toString().padStart(2, "0"); // Pad seconds with leading zero if needed

  if (hours > 0) {
    return `${hours}:${paddedMinutes}:${paddedSeconds}`;
  }

  return `${paddedMinutes}:${paddedSeconds}`;
}
