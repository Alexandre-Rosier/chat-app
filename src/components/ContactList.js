import React from 'react';
import Contact from "./Contact"

function UsersList() {
    const users = [
    {
      id:'1',
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      connect: false,
    },
    {
      id:'2',
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      connect: true,
    },
    {
      id:'3',
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      connect: true,
    },
    {
      id:'4',
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      connect: false,
    
    },
    {
      id:'5',
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      connect: true,
    }];
return (
    <ul>
        {
            users.map(person => <Contact id={person.id} src={person.avatar} alt={person.name} 
              status={person.connect}/>)
        }
    </ul>
)
};
  

  export default UsersList ;