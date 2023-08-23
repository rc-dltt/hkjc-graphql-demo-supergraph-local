import { jest } from "@jest/globals";

const USERS = [
  {
    id: "user#1",
    name: "User #1",
    email: "user1@email.com",
    password: "pAsSWoRd!",
    roles: ["user"],
  },
  {
    id: "user#2",
    name: "Nobody",
    email: "nobody@email.com",
    password: "pAsSWoRd!",
    roles: ["none"],
  },
];

const RACES = [
  {
    id: "race#1",
    no: 1001,
    startTime: "2023-06-21 03:41:10",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#2",
    no: 1002,
    startTime: "2023-06-16 02:41:05",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#3",
    no: 1003,
    startTime: "2023-07-11 09:05:54",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#4",
    no: 1004,
    startTime: "2023-06-05 05:48:57",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#5",
    no: 1005,
    startTime: "2023-06-24 20:17:39",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#6",
    no: 1006,
    startTime: "2023-06-18 23:11:22",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#7",
    no: 1007,
    startTime: "2023-06-18 02:04:43",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#8",
    no: 1008,
    startTime: "2023-07-14 00:53:50",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#9",
    no: 1009,
    startTime: "2023-07-09 19:13:12",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#10",
    no: 1010,
    startTime: "2023-07-21 18:50:55",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#11",
    no: 1011,
    startTime: "2023-07-11 19:26:09",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#12",
    no: 1012,
    startTime: "2023-06-08 15:47:43",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#13",
    no: 1013,
    startTime: "2023-06-03 19:24:41",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#14",
    no: 1014,
    startTime: "2023-07-31 07:27:02",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#15",
    no: 1015,
    startTime: "2023-06-14 14:38:15",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#16",
    no: 1016,
    startTime: "2023-07-31 21:25:06",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#17",
    no: 1017,
    startTime: "2023-06-24 03:00:11",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#18",
    no: 1018,
    startTime: "2023-07-23 01:15:26",
    venue: "Sha Tin Racecourse",
  },
  {
    id: "race#19",
    no: 1019,
    startTime: "2023-06-18 23:54:24",
    venue: "Happy Valley Racecourse",
  },
  {
    id: "race#20",
    no: 1020,
    startTime: "2023-07-07 14:19:19",
    venue: "Sha Tin Racecourse",
  },
];

export const users = {
  list: jest.fn(() => USERS),
  get: jest.fn((id) => USERS.find((x) => x.id === id)),
};

export const races = {
  list: jest.fn(() => RACES),
  get: jest.fn((id) => RACES.find((x) => x.id === id)),
};