import { Board } from "../interfaces/internal.interface";

export const boardMock: Board = {
    id: 1,
    title: "Projekt Koala",
    idUsers: [1, 2, 3],
    columns:[
      {
        id: 1, title: "To do", 
      cards: [
        {
          id: 1, 
          title: "Card 1",
          description: "Description 1",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 

      ]},
      {
        id: 2, title: "Doing", 
      cards: [
        {
          id: 2, 
          title: "Card 2",
          description: "Description 2",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      {
          id: 3, 
          title: "Card 3",
          description: "Description 3",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      {
          id: 4, 
          title: "Card 4",
          description: "Description 4",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      {
          id: 5, 
          title: "Card 5",
          description: "Description 5",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      {
          id: 6, 
          title: "Card 6",
          description: "Description 6",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      {
          id: 7, 
          title: "Card 7",
          description: "Description 7",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 
      ]},
      {
        id: 3, title: "Done", 
      cards: [
        {
          id: 8, 
          title: "Card 8",
          description: "Description 8",
          startDate: new Date(),
          endDate: new Date(),
          idOwner: 1,
          idUserAssigned: 1,
      }, 

      ]},
    ]
  };