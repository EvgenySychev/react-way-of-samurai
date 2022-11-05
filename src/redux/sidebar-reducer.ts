export type FriendsInSidebarType = {
  id: number;
  name: string;
  img: string;
};
export type SidebarType = {
  sidebarItems: Array<SidebarItem>;
  friendsInSidebar: Array<FriendsInSidebarType>;
};

export type SidebarItem = {
  id: number;
  link: string;
  linkTitle: string;
};

export type ActionSidebarReducerTypes = {};

const initialState: SidebarType = {
  sidebarItems: [
    {
      id: 1,
      link: '/profile',
      linkTitle: 'My Profile',
    },
    {
      id: 2,
      link: '/dialogs',
      linkTitle: 'Messages',
    },
    {
      id: 3,
      link: '/users',
      linkTitle: 'Users',
    },
    {
      id: 4,
      link: '/news',
      linkTitle: 'News',
    },
    {
      id: 5,
      link: '/music',
      linkTitle: 'Music',
    },
    {
      id: 6,
      link: '/settings',
      linkTitle: 'Settings',
    },
  ],
  friendsInSidebar: [
    {
      id: 1,
      name: 'Anton',
      img: 'https://i.pinimg.com/originals/db/cd/82/dbcd82c005eb2be4ceacd2da92c47923.jpg',
    },
    {
      id: 2,
      name: 'Nikolay',
      img: 'http://behandsome.ru/wp-content/uploads/2021/01/Luke_Skywalker_Be_Handsome-1024x683.jpg',
    },
    {
      id: 3,
      name: 'Dasha',
      img: 'https://i.pinimg.com/originals/34/77/1f/34771ff82844cea6511e662ab1c6e198.jpg',
    },
  ],
};

const sidebarReducer = (state = initialState): SidebarType => {
  return { ...state };
};

export default sidebarReducer;
