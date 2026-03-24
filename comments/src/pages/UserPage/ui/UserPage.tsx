import { Outlet, useParams } from "react-router-dom";
import { UserTabs } from "../../../widgets/UserTabs/UserTabs"; // Проверь путь до виджета

export const UserLayout = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Профиль пользователя №{id}</h2>
      <UserTabs />
      <hr />
      <Outlet />
    </div>
  );
};
