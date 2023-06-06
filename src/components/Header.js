import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Header = () => {
    const {user} = useContext(UserContext)
    return (
      <div className="w-full">
        <div className="h-40 mr-10 mt-5 float-right">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              KA
            </span>
          </div>
          <b className='m-2'>{user.name}</b>
        </div>
      </div>
    );
  };

export default Header;