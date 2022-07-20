import './Avatars.scss';

type Props = {
  username: string;
};

export const Avatars: React.FC<Props> = ({ username }) => (
  <div className="cardHeadImage">
    <img 
      alt="avatar"
      className="Avatar"
      src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
    />
  </div>
);
