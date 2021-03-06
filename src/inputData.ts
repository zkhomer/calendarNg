import { InputData } from './app/interface/inputData';

export const departmentTeams: InputData = {
  teams: [
    {
      name: 'Frontend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 1,
    },
    {
      name: 'Design Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 2,
    },
    {
      name: 'Backend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 3,
    },
    {
      name: 'Managers Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      id: 4,
    },
  ],
  users: [
    {
      id: 1,
      name: 'FE_Team_User1',
      teamId: 1,
    },
    {
      id: 2,
      name: 'FE_Team_User2',
      teamId: 1,
    },
    {
      id: 3,
      name: 'FE_Team_User3',
      teamId: 1,
    },
    {
      id: 4,
      name: 'FE_Team_User4',
      teamId: 1,
    },
    {
      id: 5,
      name: 'FE_Team_User5',
      teamId: 1,
    },
    {
      id: 6,
      name: 'Des_Team_User1',
      teamId: 2,
    },
    {
      id: 7,
      name: 'Des_Team_User2',
      teamId: 2,
    },
    {
      id: 8,
      name: 'Des_Team_User3',
      teamId: 2,
    },
    {
      id: 9,
      name: 'Des_Team_User4',
      teamId: 2,
    },
    {
      id: 10,
      name: 'Des_Team_User5',
      teamId: 2,
    },
    {
      id: 11,
      name: 'BE_Team_User1',
      teamId: 3,
    },
    {
      id: 12,
      name: 'BE_Team_User2',
      teamId: 3,
    },
    {
      id: 13,
      name: 'BE_Team_User3',
      teamId: 3,
    },
    {
      id: 14,
      name: 'BE_Team_User4',
      teamId: 3,
    },
    {
      id: 15,
      name: 'BE_Team_User5',
      teamId: 3,
    },
    {
      id: 16,
      name: 'Man_Team_User1',
      teamId: 4,
    },
    {
      id: 17,
      name: 'Man_Team_User2',
      teamId: 4,
    },
    {
      id: 18,
      name: 'Man_Team_User3',
      teamId: 4,
    },
    {
      id: 19,
      name: 'Man_Team_User4',
      teamId: 4,
    },
    {
      id: 20,
      name: 'Man_Team_User5',
      teamId: 4,
    },
  ],
  vacations: [
    {
      id: 1,
      startDate: '13.03.2021',
      endDate: '16.03.2021',
      userId: 1,
      isPaid: false,
    },
    {
      id: 2,
      startDate: '29.02.2021',
      endDate: '04.03.2021',
      userId: 2,
      isPaid: true,
    },
    {
      id: 3,
      startDate: '13.01.2021',
      endDate: '16.01.2021',
      userId: 3,
      isPaid: false,
    },
    {
      id: 4,
      startDate: '20.12.2020',
      endDate: '01.01.2021',
      userId: 4,
      isPaid: false,
    },
    {
      id: 5,
      startDate: '28.02.2021',
      endDate: '03.03.2021',
      userId: 5,
      isPaid: true,
    },
    {
      id: 6,
      startDate: '05.02.2021',
      endDate: '15.02.2021',
      userId: 6,
      isPaid: true,
    },
    {
      id: 7,
      startDate: '01.04.2021',
      endDate: '15.04.2021',
      userId: 7,
      isPaid: true,
    },
    {
      id: 8,
      startDate: '13.05.2021',
      endDate: '22.05.2021',
      userId: 8,
      isPaid: false,
    },

    {
      id: 9,
      startDate: '02.01.2021',
      endDate: '06.01.2021',
      userId: 9,
      isPaid: true,
    },
    {
      id: 10,
      startDate: '13.03.2021',
      endDate: '17.03.2021',
      userId: 10,
      isPaid: true,
    },
    {
      id: 11,
      startDate: '08.12.2020',
      endDate: '21.12.2020',
      userId: 11,
      isPaid: false,
    },
    {
      id: 12,
      startDate: '10.02.2021',
      endDate: '12.02.2021',
      userId: 12,
      isPaid: false,
    },
    {
      id: 13,
      startDate: '18.02.2021',
      endDate: '02.03.2021',
      userId: 13,
      isPaid: false,
    },
    {
      id: 14,
      startDate: '31.12.2021',
      endDate: '07.01.2021',
      userId: 14,
      isPaid: true,
    },
    {
      id: 15,
      startDate: '13.04.2021',
      endDate: '16.04.2021',
      userId: 15,
      isPaid: false,
    },
    {
      id: 16,
      startDate: '01.03.2020',
      endDate: '03.03.2020',
      userId: 16,
      isPaid: false,
    },
    {
      id: 17,
      startDate: '10.12.2020',
      endDate: '15.12.2020',
      userId: 17,
      isPaid: true,
    },
    {
      id: 18,
      startDate: '25.02.2021',
      endDate: '01.03.2021',
      userId: 18,
      isPaid: true,
    },
    {
      id: 19,
      startDate: '01.02.2021',
      endDate: '10.02.2021',
      userId: 19,
      isPaid: true,
    },
    {
      id: 20,
      startDate: '20.04.2021',
      endDate: '22.04.2021',
      userId: 20,
      isPaid: false,
    },
    {
      id: 21,
      startDate: '22.03.2021',
      endDate: '26  .03.2021',
      userId: 2,
      isPaid: true,
    },
    {
      id: 22,
      startDate: '18.02.2021',
      endDate: '20.02.2021',
      userId: 7,
      isPaid: true,
    },
    {
      id: 13,
      startDate: '08.12.2020',
      endDate: '21.12.2020',
      userId: 14,
      isPaid: false,
    },
    {
      id: 24,
      startDate: '20.02.2021',
      endDate: '22.02.2021',
      userId: 15,
      isPaid: false,
    },
  ],
};
