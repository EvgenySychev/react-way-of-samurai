import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


export const Users = (props:UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { props.setUsers(response.data.items)})
        /*props.setUsers( [
            {
                id:1,
                photoURL: 'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
                followed: true,
                fullName: 'Dima',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id:2,
                photoURL:'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
                followed: true,
                fullName: 'Alex',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}},
            {
                id:3,
                photoURL:'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
                followed: true,
                fullName: 'Oleg',
                status: 'I am a boss',
                location: {city: 'Kien', country: 'Ukraine'}
            }
        ])*/
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img />
                        </div>
                        <div>
                            {u.followed
                            ? <button onClick={()=> {props.unfollow(u.id)}}> Unfollow </button>
                            : <button onClick={()=> {props.follow(u.id)}}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}