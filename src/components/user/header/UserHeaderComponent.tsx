import GitHubData from "../../header/GitHubData";
import styles from './Header.module.css';

export default function UserHeaderComponent(props:{data:GitHubData, className: string}){
    
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    const { avatar_url, login, created_at, name} = props.data;
    const date = formatDate(created_at);

    return(
       <div className={`${styles.nameContainer} ${props.className}`}> 
           <div>
                <img src={avatar_url} alt="profile pic" className={styles.profilePic}/>
           </div>
           <div className={styles.nameAndDateDiv}>
                <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.login}>@{login}</p>
                </div>
                <div className={styles.date}>
                    {date == 'Invalid Date' ?(
                        <div></div>
                    )
                    :
                    (
                    <div>Joined {date}</div>
                    )}
                </div>
           </div>
        </div>
    )
}