import React from 'react';

const Users = props => {
    return (
        <div>
            {
                props.users.map(user => (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.avatar} alt=""/>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </span>
                        <span>
                            <span>
                               <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.state}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;