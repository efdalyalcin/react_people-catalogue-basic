import { useState, useCallback, useEffect } from "react";
import { getUsers } from "../../api/getUsers";
import { Avatars } from "../Avatars/Avatars";
import { UserInfo } from "../UserInfo/UserInfo";
import './Users.scss';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadUsers = useCallback(
    async () => {
      try {
        const peopleFromServer = await getUsers();

        setUsers(peopleFromServer);
        setIsLoaded(true);
      } catch {
        setUsers([]);
      }
    },
    [],
  );

  useEffect(
    () => {
      loadUsers();
    },
    [loadUsers]
  );

  return (
    <>
      {isLoaded 
        ? ( 
          <div className="Users__container">
            {users.map(user => (
              <div 
                className="Users__card"
                key={user.id}
              >
                <div className="Users__card-row">
                  <div className="Users__card-avatar">
                    <Avatars username={user.name} />
                  </div>
                  <div className="Users__card-info">
                    <UserInfo 
                      userName={user.name}
                      userEmail={user.email}
                      userPhone={user.phone}
                      userCompany={user.company.name}
                      userWebsite={user.website}
                      userAddress={user.address}
                    />
                  </div>
                </div>
              </div>
              
            ))}
          </div>
          )
        : (<div className="Users__loading">
            <div className="spinner"></div>
          </div>)
      }
    </>
  );
};
