import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      title: "Alone",
      year: 2022,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg",
      description:
        "A gripping thriller that explores the challenges of survival in isolation. When a hiker becomes stranded in a remote wilderness, they must rely on their instincts and resourcefulness to endure against all odds. As days turn into weeks, the line between sanity and desperation blurs, testing the limits of human resilience.",
    },
    {
      title: "Venus",
      year: 2014,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie03.jpg",
      description:
        "In a distant future, humanity has colonized Venus, where the lush, alien landscape serves as the backdrop for a timeless love story. Amidst political intrigue and societal unrest, two star-crossed lovers from different worlds defy the odds to forge a bond that transcends planetary boundaries.",
    },
    {
      title: "Mars",
      year: 2015,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie02.jpg",
      description:
        "Embark on an epic journey to the red planet, where a team of explorers confronts the harsh realities of Martian terrain. Battling fierce storms and mechanical failures, they uncover ancient mysteries that could reshape our understanding of the universe. 'Mars' is a thrilling adventure that explores the human spirit's unyielding quest for discovery.",
    },
    {
      title: "On Watch",
      year: 2018,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie04.jpg",
      description:
        "In a small town shrouded in mystery, a detective uncovers a series of chilling disappearances that defy explanation. As the clues lead deeper into the town's dark past, the investigator must confront their own demons to solve the enigma of 'On Watch.' This suspenseful thriller keeps audiences on the edge of their seats until the final revelation.",
    },
    {
      title: "Fury",
      year: 2014,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie05.jpg",
      description:
        "Set against the brutal backdrop of World War II, 'Fury' follows a hardened tank commander and his crew as they navigate the harrowing battlegrounds of Europe. Amidst the chaos of war, bonds of brotherhood are forged and tested in the crucible of combat. With gripping action sequences and raw emotional intensity, 'Fury' captures the true cost of heroism.",
    },
    {
      title: "Trooper",
      year: 2016,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie06.jpg",
      description:
        "Join an elite squadron of troopers on a high-stakes mission to safeguard a vital outpost from ruthless invaders. As the battle rages across alien landscapes, alliances are forged and loyalties tested. 'Trooper' is a pulse-pounding adventure that combines adrenaline-pumping action with themes of sacrifice, courage, and the unbreakable spirit of humanity.",
    },
    {
      title: "Horror Night",
      year: 2020,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie07.jpg",
      description:
        "Enter a realm of terror where nightmares come to life on 'Horror Night.' In an isolated mansion shrouded in darkness, a group of strangers must confront their deepest fears to survive the night. As malevolent forces close in, secrets are revealed, and the line between reality and illusion blurs. Brace yourself for a spine-chilling experience like no other.",
    },
    {
      title: "The Lost Name",
      year: 2019,
      cover: "https://pixner.net/boleto/demo/assets/images/movie/movie08.jpg",
      description:
        "Embark on a quest for identity in 'The Lost Name,' where a journey of self-discovery unfolds against a backdrop of intrigue and deception. A mysterious artifact holds the key to unlocking forgotten memories, leading our protagonist on a perilous adventure through hidden realms and forgotten truths. Dive into a world where every clue brings them closer to unraveling the ultimate mystery.",
    },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return <MovieContext.Provider value={{ movies, addMovie }}>{children}</MovieContext.Provider>;
};
