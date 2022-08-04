// import React from 'react';
// // import PropTypes from 'prop-types';
// import styles from './Profile.module.css';

// export const Profile = ({ user }) => {

//     const { username, tag, location, avatar, stats } = user;

//     return (
//         <div className={styles.profile}>
//             <div className={styles.description}>
//                 <img src={avatar} alt="User avatar" class="avatar" />
//                 <p className={styles.name}>{username}</p>
//                 <p className={styles.tag}>{tag}</p>
//                 <p className={styles.location}>{location}</p>
//             </div>
//             <ul className={styles.stats}>
//                 <li>
//                     <span className={styles.label}>Followers</span>
//                     <span className={styles.quantity}>{stats.followers}</span>
//                 </li>
//                 <li>
//                     <span className={styles.label}>Views</span>
//                     <span className={styles.quantity}>{stats.views}</span>
//                 </li>
//                 <li>
//                     <span className={styles.label}>Likes</span>
//                     <span className={styles.quantity}>{stats.likes}</span>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// Profile.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };


import PropTypes from "prop-types";
import styles from './Profile.module.css';

export const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes} = stats;
  const {profile, profile__description, profile__avatar, profile__name, profile__tag, profile__location, profile__stats, counter, label, quantity} = styles;

  return (
    <div className={profile}>
      <div className={profile__description}>
        <img
          src={avatar}
          alt="User avatar"
          className={profile__avatar}
        />
        <p className={profile__name}>{username}</p>
        <p className={profile__tag}>@{tag}</p>
        <p className={profile__location}>{location}</p>
      </div>

      <ul className={profile__stats}>
        <li className={counter}>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers ? followers : 0}</span>
        </li>
        <li className={counter}>
          <span className={label}>Views</span>
          <span className={quantity}>{views ? views : 0}</span>
        </li>
        <li className={counter}>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes ? likes : 0}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}

