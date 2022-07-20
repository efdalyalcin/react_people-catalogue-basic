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
    <p className="User__info-text"><strong>Email:</strong>{` ${userEmail}`}</p>
    <p className="User__info-text"><strong>Phone:</strong>{` ${userPhone}`}</p>
    <p className="User__info-text"><strong>Company:</strong>{` ${userCompany}`}</p>
    <p className="User__info-text"><strong>Website:</strong>{` ${userWebsite}`}</p>
    <p className="User__info-text">
      <strong>Address:</strong>
      {` ${userAddress.street}, ${userAddress.suite}, `
        + `${userAddress.city}, ${userAddress.zipcode}`}
    </p>
  </div>
);
