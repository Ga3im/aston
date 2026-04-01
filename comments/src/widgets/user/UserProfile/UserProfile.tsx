import { Outlet, useParams } from "react-router-dom";
import { UserTabs } from "../UserTabs/UserTabs"; 

export const UserLayout = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>Профиль пользователя №{userId}</h2>
      <UserTabs />
      <hr />
      <Outlet />
    </div>
  );
};