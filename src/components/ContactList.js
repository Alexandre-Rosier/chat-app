import React from 'react';
import Contact from "./Contact"

function UsersList() {
    const users = [
    {
      id:'1',
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: "offline"
    },
    {
      id:'2',
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: "online"
    },
    {
      id:'3',
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: "online"
    },
    {
      id:'4',
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: "offline"
    },
    {
      id:'5',
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: "online"
    }];
return (
    <ul>
        {
            users.map(person => <Contact id={person.id} src={person.avatar} alt={person.name} 
              status={person.online}/>)
        }
    </ul>
)
};
  

  export default UsersList ;