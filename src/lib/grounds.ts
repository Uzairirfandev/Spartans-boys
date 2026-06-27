// Shared list of grounds/avenues.
//
// Used by BOTH the "Add Score" modal (ground dropdown) and the Grounds section
// (HistorySection). Keep titles unique — match records are linked to a ground
// by its exact `title`, and the leaderboards are grouped by that title.

export type Ground = {
  title: string;
  location: string;
  image: string;
  capacity: string;
  established: string;
};

export const GROUNDS: Ground[] = [
  {
    title: "Paragon Stadium",
    location: "Lahore",
    image: "https://content-cdn.zameen.com/Paragon_City_Zameen_com_7f2bf9822a.jpg",
    capacity: "25,000",
    established: "2010",
  },
  {
    title: "Ashiyana Stadium",
    location: "Lahore",
    image: "https://www.skymarketing.com.pk/wp-content/uploads/2022/05/aashiana-housing-scaled.jpg",
    capacity: "20,000",
    established: "2012",
  },
  {
    title: "Chachu Wali Stadium",
    location: "Lahore",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/13/21/28/84/bedian-spins-cricket.jpg",
    capacity: "15,000",
    established: "2015",
  },
  {
    title: "Askari 11 Stadium",
    location: "Lahore",
    image: "https://i.ytimg.com/vi/BMma6mkqDn8/sddefault.jpg",
    capacity: "18,000",
    established: "2013",
  },
  {
    title: "Phase 8 Stadium",
    location: "Peshawar, Pakistan",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    capacity: "22,000",
    established: "2018",
  },
];
