const posts = [
  {
    id: 1,
    user: {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1701453031904-dbec6ef40984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8l",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1701095037703-2df7e284326a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    likes: 100,
    caption: "A beautiful sunset",
    createdAt: "2023-12-15T08:00:00Z",
    comments: [
      {
        user: "thezaman",
        comment: "This is amazing man!",
      },
      {
        user: "codedbalam",
        comment: "I wake up, I code, I go back to sleep!",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1700239025572-65c407f152cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    image:
      "https://images.unsplash.com/photo-1683427850494-bcf6511c962b?q=80&w=2302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 75,
    caption: "Exploring new places",
    createdAt: "2023-12-14T12:30:00Z",
    comments: [
      {
        user: "prayingmedic",
        comment: "That is how to start your day!",
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Jane Doe",
      image:
        "https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    image:
      "https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    likes: 6220,
    caption: "Work hard, study hard.",
    createdAt: "2023-12-14T12:30:00Z",
    comments: [
      {
        user: "blessed",
        comment: "You totally getting that job girl!",
      },
      {
        user: "mattrix",
        comment: "keep it up girl, you are definitly close!",
      },
    ],
  },
  {
    id: 4,
    user: {
      name: "Smith Doe",
      image:
        "https://images.unsplash.com/photo-1701453031904-dbec6ef40984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8l",
    },
    image:
      "https://images.pexels.com/photos/4963919/pexels-photo-4963919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    createdAt: "2023-12-14T12:30:00Z",
    likes: 4721,
    caption: "Fresh greens from the brooks.",
    comments: [
      {
        user: "prayingmedic",
        comment: "That is how to start your day!",
      },
    ],
  },
];

export default posts;
