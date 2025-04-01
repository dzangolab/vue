const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Elizabeth Smith",
    email: "jane.smith@example.com",
    age: 32,
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "bob.j@example.com",
    age: 25,
    city: "Chicago",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    age: 22,
    city: "San Francisco Bay Area",
  },
  {
    id: 5,
    name: "Charles William Wilson Jr.",
    email: "charlie.w@example.com",
    age: 35,
    city: "Houston",
  },
  {
    id: 6,
    name: "Evangeline Martinez",
    email: "eva.martinez@example.com",
    age: 30,
    city: "Miami Beach",
  },
  {
    id: 7,
    name: "David Lawrence",
    email: "david.lee@example.com",
    age: 27,
    city: "Seattle",
  },
  {
    id: 8,
    name: "Sophia Turner",
    email: "sophie.t@example.com",
    age: 29,
    city: "Atlanta",
  },
  {
    id: 9,
    name: "Michael Anthony Adams",
    email: "michael.a@example.com",
    age: 31,
    city: "Dallas-Fort Worth",
  },
  {
    id: 10,
    name: "Olivia Charlotte Carter",
    email: "olivia.carter@example.com",
    age: 26,
    city: "Denver",
  },
  {
    id: 11,
    name: "Ryan Alexander Cooper",
    email: "ryan.cooper@example.com",
    age: 34,
    city: "Boston",
  },
  {
    id: 12,
    name: "Emily Davis",
    email: "emily.d@example.com",
    age: 33,
    city: "Phoenix",
  },
  {
    id: 13,
    name: "Daniel William White",
    email: "daniel.white@example.com",
    age: 28,
    city: "Philadelphia",
  },
  {
    id: 14,
    name: "Ava Rose Moore",
    email: "ava.m@example.com",
    age: 24,
    city: "Austin",
  },
  {
    id: 15,
    name: "Nicholas Harrison",
    email: "nicholas.h@example.com",
    age: 27,
    city: "San Diego",
  },
  {
    id: 16,
    name: "Emma Grace Turner",
    email: "emma.t@example.com",
    age: 29,
    city: "Portland",
  },
  {
    id: 17,
    name: "William Lewis Jr.",
    email: "william.l@example.com",
    age: 32,
    city: "Detroit",
  },
  {
    id: 18,
    name: "Grace Margaret Murphy",
    email: "grace.murphy@example.com",
    age: 26,
    city: "Minneapolis",
  },
  {
    id: 19,
    name: "Matthew Wright",
    email: "matthew.w@example.com",
    age: 30,
    city: "Charlotte",
  },
  {
    id: 20,
    name: "Lily Alexandra Adams",
    email: "lily.adams@example.com",
    age: 31,
    city: "Nashville",
  },
];

const formatDemoData = [
  {
    id: 1001,
    amount: 1_234_567.89,
    quantity: 420,
    date: null,
    datetime: null,
    description: "Purchase of equipment",
  },
  {
    id: 1002,
    amount: 987_654.32,
    quantity: 175,
    date: new Date("2023-12-01T12:30:00"),
    datetime: "2023-12-01T11:00:00",
    description: "Office rent payment",
  },
  {
    id: 1003,
    amount: 54321.0,
    quantity: 7890,
    date: new Date("2023-12-15T08:45:00"),
    datetime: new Date("2023-12-15T08:45:00"),
    description: "Marketing campaign expenses",
  },
  {
    id: 1004,
    amount: 654_321.12,
    quantity: 2950,
    date: new Date(),
    datetime: new Date(),
    description: "Product development costs",
  },
  {
    id: 1005,
    amount: 789_012.34,
    quantity: 53210,
    date: new Date("2023-12-05T09:15:00"),
    datetime: "2023-12-05T09:15:00",
    description: "Travel and accommodation",
  },
  {
    id: 1006,
    amount: 12345.67,
    quantity: 6430,
    date: new Date("2023-12-20T14:00:00"),
    datetime: new Date("2023-12-05T09:15:00"),
    description: "Employee salaries",
  },
  {
    id: 1007,
    amount: 234_567.89,
    quantity: 98760,
    date: new Date(),
    datetime: new Date(),
    description: "Product inventory replenishment",
  },
  {
    id: 1008,
    amount: 876_543.21,
    quantity: 123_450,
    date: new Date("2023-12-10T18:45:00"),
    datetime: new Date("2023-12-10T18:45:00"),
    description: "New marketing materials",
  },
  {
    id: 1009,
    amount: 13579.24,
    quantity: 45670,
    date: new Date("2023-12-25T11:30:00"),
    datetime: new Date("2023-12-25T11:30:00"),
    description: "Holiday season promotions",
  },
  {
    id: 1010,
    amount: 24680.36,
    quantity: 78901,
    date: new Date(),
    datetime: new Date(),
    description: "Office furniture upgrade",
  },
];

const invitations = [
  {
    id: 456,
    appId: 2,
    createdAt: new Date("2024-01-05").getTime(),
    expiresAt: new Date("2024-02-04").getTime(),
    email: "bob@dzangolab.com",
    payload: null,
    invitedById: "user-4",
    revokedAt: new Date("2024-01-14").getTime(),
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-01-14").getTime(),
    invitedBy: {
      id: "user-4",
      email: "charlie@dzangolab.com",
      givenName: "Charlie",
      roles: ["USER"],
      surname: "Brown",
      username: "charlieb",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 123,
    appId: 3,
    createdAt: new Date("2024-01-05").getTime(),
    expiresAt: new Date("2024-02-04").getTime(),
    email: "jane@dzangolab.com",
    givenName: "Jane",
    payload: null,
    invitedById: "user-2",
    revokedAt: null,
    acceptedAt: null,
    role: "ADMIN",
    updatedAt: new Date("2024-01-24").getTime(),
    invitedBy: {
      id: "user-2",
      email: "admin@dzangolab.com",
      givenName: "Admin",
      roles: ["USER"],
      surname: "User",
      username: "admin",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 789,
    appId: 2,
    createdAt: new Date("2024-01-05").getTime(),
    expiresAt: new Date().getTime() + 4 * 24 * 60 * 60 * 1000,
    payload: null,
    email: "june@dzangolab.com",
    invitedById: "user-8",
    revokedAt: null,
    acceptedAt: new Date("2024-02-24").getTime(),
    role: "USER",
    updatedAt: new Date("2024-01-24").getTime(),
    invitedBy: {
      id: "user-8",
      email: "jonny@dzangolab.com",
      givenName: "jonny",
      roles: ["USER"],
      surname: "smith",
      username: "admin",
      isActiveUser: true,
      disabled: true,
    },
  },
  {
    id: 789,
    appId: 2,
    createdAt: new Date("2024-01-05").getTime(),
    expiresAt: new Date().getTime() + 4 * 24 * 60 * 60 * 1000,
    payload: null,
    email: "janet@dzangolab.com",
    invitedById: "user-8",
    revokedAt: null,
    acceptedAt: null,
    role: "ADMIN",
    updatedAt: new Date("2024-01-24").getTime(),
    invitedBy: {
      id: "user-8",
      email: "jolly@dzangolab.com",
      givenName: "jolly",
      roles: ["USER"],
      surname: "doe",
      username: "admin",
      isActiveUser: true,
      disabled: true,
    },
  },
  {
    id: 890,
    appId: 2,
    createdAt: new Date("2024-01-10").getTime(),
    expiresAt: new Date().getTime() + 4 * 24 * 60 * 60 * 1000,
    payload: null,
    email: "alexander.smith1234@dzangolab.com",
    invitedById: "user-15",
    revokedAt: null,
    acceptedAt: null,
    role: "ADMIN",
    updatedAt: new Date("2024-01-24").getTime(),
    invitedBy: {
      id: "user-15",
      email: "michelle.williams@dzangolab.com",
      givenName: "Michelle Alexandra",
      roles: ["USER"],
      surname: "Williams-Smithson",
      username: "admin",
      isActiveUser: true,
      disabled: true,
    },
  },
  {
    id: 891,
    appId: 2,
    createdAt: new Date("2024-03-01").getTime(),
    expiresAt: new Date("2024-05-01").getTime(),
    payload: null,
    email: "george.harrison@dzangolab.com",
    invitedById: "user-22",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-03-03").getTime(),
    invitedBy: {
      id: "user-22",
      email: "robert.johnson@dzangolab.com",
      givenName: "Robert James",
      roles: ["USER"],
      surname: "Johnson-Longstreet",
      username: "moderator_robert",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 892,
    appId: 2,
    createdAt: new Date("2024-01-15").getTime(),
    expiresAt: new Date("2024-03-15").getTime(),
    payload: null,
    email: "lucas.martins@dzangolab.com",
    invitedById: "user-34",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-01-18").getTime(),
    invitedBy: {
      id: "user-34",
      email: "david.jones@dzangolab.com",
      givenName: "David William",
      roles: ["ADMIN", "MODERATOR"],
      surname: "Jones-Smith",
      username: "admin_david_jones",
      isActiveUser: true,
      disabled: true,
    },
  },
  {
    id: 893,
    appId: 2,
    createdAt: new Date("2024-02-18").getTime(),
    expiresAt: new Date("2024-04-20").getTime(),
    payload: null,
    email: "olivia.clark@dzangolab.com",
    invitedById: "user-18",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-02-21").getTime(),
    invitedBy: {
      id: "user-18",
      email: "luke.martin@dzangolab.com",
      givenName: "Luke Robert",
      roles: ["USER"],
      surname: "Martin",
      username: "user_luke",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 894,
    appId: 2,
    createdAt: new Date("2024-03-05").getTime(),
    expiresAt: new Date("2024-05-05").getTime(),
    payload: null,
    email: "jackson.davis@dzangolab.com",
    invitedById: "user-27",
    revokedAt: null,
    acceptedAt: null,
    role: "ADMIN",
    updatedAt: new Date("2024-03-07").getTime(),
    invitedBy: {
      id: "user-27",
      email: "emma.white@dzangolab.com",
      givenName: "Emma Nicole",
      roles: ["ADMIN", "MODERATOR"],
      surname: "White",
      username: "superadmin_emma",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 895,
    appId: 2,
    createdAt: new Date("2024-02-05").getTime(),
    expiresAt: new Date("2024-04-06").getTime(),
    payload: null,
    email: "sophia.brown@dzangolab.com",
    invitedById: "user-10",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-02-12").getTime(),
    invitedBy: {
      id: "user-10",
      email: "michael.green@dzangolab.com",
      givenName: "Michael Christopher",
      roles: ["ADMIN", "USER"],
      surname: "Green",
      username: "admin_michael",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 896,
    appId: 2,
    createdAt: new Date("2024-01-28").getTime(),
    expiresAt: new Date("2024-03-28").getTime(),
    payload: null,
    email: "madeline.james@dzangolab.com",
    invitedById: "user-20",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-02-01").getTime(),
    invitedBy: {
      id: "user-20",
      email: "brandon.kelly@dzangolab.org",
      givenName: "Brandon Nathaniel",
      roles: ["USER"],
      surname: "Kelly",
      username: "admin_bkelly",
      isActiveUser: true,
      disabled: true,
    },
  },
  {
    id: 897,
    appId: 2,
    createdAt: new Date("2024-03-10").getTime(),
    expiresAt: new Date("2024-05-10").getTime(),
    payload: null,
    email: "ethan.miller@dzangolab.com",
    invitedById: "user-5",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-03-12").getTime(),
    invitedBy: {
      id: "user-5",
      email: "hannah.morris@dzangolab.com",
      givenName: "Hannah",
      roles: ["ADMIN"],
      surname: "Morris",
      username: "admin_hannah",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 898,
    appId: 2,
    createdAt: new Date("2024-02-25").getTime(),
    expiresAt: new Date("2024-04-25").getTime(),
    payload: null,
    email: "benjamin.martinez@dzangolab.com",
    invitedById: "user-12",
    revokedAt: null,
    acceptedAt: null,
    role: "ADMIN",
    updatedAt: new Date("2024-02-28").getTime(),
    invitedBy: {
      id: "user-12",
      email: "lucy.rodriguez@dzangolab.net",
      givenName: "Lucy Isabella",
      roles: ["ADMIN"],
      surname: "Rodriguez",
      username: "superadmin_lucy",
      isActiveUser: true,
      disabled: false,
    },
  },
  {
    id: 899,
    appId: 2,
    createdAt: new Date("2024-01-30").getTime(),
    expiresAt: new Date("2024-03-30").getTime(),
    payload: null,
    email: "claire.morgan@dzangolab.com",
    invitedById: "user-16",
    revokedAt: null,
    acceptedAt: null,
    role: "USER",
    updatedAt: new Date("2024-02-02").getTime(),
    invitedBy: {
      id: "user-16",
      email: "jacob.smith@dzangolab.com",
      givenName: "Jacob",
      roles: ["USER"],
      surname: "Smith",
      username: "user_jacobsmith",
      isActiveUser: true,
      disabled: false,
    },
  },
];

export { data, formatDemoData, invitations };
