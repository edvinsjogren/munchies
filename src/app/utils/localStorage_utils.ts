export function checkLastVisit() {
  const lastVisit = localStorage.getItem('lastMunchiesVisit');
  const oneWeek = 604800000;

  if (lastVisit) {
    return Date.now() - parseInt(lastVisit) < oneWeek;
  }

  localStorage.setItem('lastMunchiesVisit', Date.now().toString());
  return false;
}
