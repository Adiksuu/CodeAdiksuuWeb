function toSite(site: string) {
  window.location.hash = "";
  window.location.search = site;
}
