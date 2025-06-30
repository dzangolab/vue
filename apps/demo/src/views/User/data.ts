export const allUsers = [
  {
    id: "user-1",
    email: "john@dzangolab.com",
    givenName: "John",
    roles: ["USER"],
    surname: "Doe",
    username: "johndoe",
    isActiveUser: true,
    invitedBy: null,
    signedUpAt: "2023-08-10T08:00:00Z",
    disabled: false,
  },
  {
    id: "invitation-123",
    email: "jane@dzangolab.com",
    givenName: "Jane",
    roles: ["ADMIN"],
    surname: "Smith",
    username: "janesmith",
    isActiveUser: false,
    invitedBy: {
      id: "user-2",
      email: "admin@dzangolab.com",
      givenName: "Admin",
      roles: ["USER"],
      surname: "User",
      username: "admin",
      isActiveUser: true,
    },
    disabled: true,
  },
  {
    id: "user-3",
    email: "alice@dzangolab.com",
    givenName: "Alice",
    roles: ["USER"],
    surname: "Johnson",
    username: "alicej",
    isActiveUser: true,
    invitedBy: null,
    signedUpAt: "2023-08-08T10:30:00Z",
    disabled: false,
  },
  {
    id: "invitation-456",
    email: "bob@dzangolab.com",
    givenName: "Bob",
    roles: ["ADMIN"],
    surname: "Williams",
    username: "bobw",
    isActiveUser: false,
    disabled: false,
    invitedBy: {
      id: "user-4",
      email: "charlie@dzangolab.com",
      givenName: "Charlie",
      roles: ["USER"],
      surname: "Brown",
      username: "charlieb",
      isActiveUser: true,
    },
  },
  {
    id: "user-6",
    email: "george@dzangolab.com",
    givenName: "george",
    roles: ["USER"],
    surname: "williams",
    username: "george",
    isActiveUser: true,
    invitedBy: null,
    signedUpAt: "2023-10-10T08:00:00Z",
    disabled: true,
  },
];

export const apps = [
  {
    id: 1,
    name: "app-vue",
    origin: "app-vue-origin",
    supportedRoles: [
      {
        id: 1,
        name: "USER",
      },
    ],
  },
  {
    id: 2,
    name: "app-react",
    origin: "app-react-origin",
    supportedRoles: [
      {
        id: 1,
        name: "USER",
      },
    ],
  },
  {
    id: 3,
    name: "admin-react",
    origin: "admin-react-origin",
    supportedRoles: [
      {
        id: 2,
        name: "ADMIN",
      },
      {
        id: 3,
        name: "SUPERADMIN",
      },
    ],
  },
  {
    id: 4,
    name: "admin-vue",
    origin: "admin-vue-origin",
    supportedRoles: [
      {
        id: 2,
        name: "ADMIN",
      },
      {
        id: 3,
        name: "SUPERADMIN",
      },
    ],
  },
];
