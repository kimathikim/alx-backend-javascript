export default function getNeighborhoodList() {
  this.sanFransiscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
  self.sanFransiscoNeighborhoods.push(newNeighborhood);
  return self.sanFransiscoNeighborhoods;
  };
}
