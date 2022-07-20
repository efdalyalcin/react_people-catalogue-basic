import './UserInfo.scss';

type Props = {
  userName: string;
  userEmail: string;
  userPhone: string;
  userCompany: string;
  userWebsite: string;
  userAddress: Address;
};

export const UserInfo: React.FC<Props> = ({
  userName,
  userEmail,
  userPhone,
  userCompany,
  userWebsite,
  userAddress,
}) => (
  <div>
    <h2 className="User__info-title">{userName}</h2>
    <p className="User__info-text"><b>Email:</b>{` ${userEmail}`}</p>
    <p className="User__info-text"><b>Phone:</b>{` ${userPhone}`}</p>
    <p className="User__info-text"><b>Company:</b>{` ${userCompany}`}</p>
    <p className="User__info-text"><b>Website:</b>{` ${userWebsite}`}</p>
    <p className="User__info-text">
      <b>Address:</b>
      {` ${userAddress.street}, ${userAddress.suite}, `
        + `${userAddress.city}, ${userAddress.zipcode}`}
    </p>
  </div>
);
