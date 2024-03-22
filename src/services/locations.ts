export const locations = [
  {
    id: 1,
    name: "Bambalapitiya",
    slug: "bambalapitiya"
  },
  {
    id: 2,
    name: "Wellawatte",
    slug: "wellawatte"
  },
  {
    id: 3,
    name: "Dehiwala",
    slug: "dehiwala"
  },

];

export const getLocation = (id: number) => {
  return locations.find((location) => location.id === id);
}