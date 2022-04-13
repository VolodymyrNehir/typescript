import {FC} from 'react';
import {IUser} from "../../Interfaces";

const User:FC<IUser> = ({user:{name,id,username}}) => {
    return (
        <div>
          <h1>{name}</h1>
        </div>
    );
};

export {User};