export function buildLatLngGrid(step = 30) {
  const paths = [];

  for (let lat = -60; lat <= 60; lat += step) {
    const points = [];
    for (let lng = -180; lng <= 180; lng += 4) {
      points.push([lat, lng]);
    }
    paths.push({ points });
  }

  for (let lng = -180; lng < 180; lng += step) {
    const points = [];
    for (let lat = -80; lat <= 80; lat += 4) {
      points.push([lat, lng]);
    }
    paths.push({ points });
  }

  return paths;
}
