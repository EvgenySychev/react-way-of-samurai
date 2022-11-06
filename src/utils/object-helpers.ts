import { UserType } from '../redux/users-reducer';

export const updateObjectInArray = (
  items: UserType[],
  itemsID: number,
  objPropName: any,
  newObjProps: any,
) => {
  return items.map(u => {
    // @ts-ignore
    if (u[objPropName] === itemsID) {
      return { ...u, ...newObjProps };
    }

    return u;
  });
};
