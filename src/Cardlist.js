import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const CardComp = robots.map((user,i) => {
    return <Card key={i} id={user.id} name={robots[i].name} email={robots[i].email} />
});
return (<div> {CardComp}</div>)
    // return(
    //     <div>
    //         <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    //     </div>

    // )
}
export default Cardlist;