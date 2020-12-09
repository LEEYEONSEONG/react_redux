import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  useEffect(() => {
    return () => {
      console.log('user 값이 바뀌기 전');
      console.log(user);
    };
  }, [user]);

  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? 'pink' : 'black',
          cursor: 'pointer',
        }}
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id,
          })
        }
      >
        {username}
      </b>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_USER',
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((el) => {
        return <User key={el.id} user={el} />;
      })}
    </div>
  );
}

export default React.memo(UserList);
