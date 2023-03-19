import GitHubData from "../../header/GitHubData";
import StatsComponent from "./StatsComponents";
import styles from './Body.module.css';

export default function UserBodyComponent(props:{data:GitHubData, className: string}){
    const {bio, followers, following, public_repos} = props.data;
    return (
        <div className={props.className}>
            { bio ? (
                <div className={styles.bio}>
                    {bio}
                </div>
            ):(
                <div className={styles.bio}>This profile has no bio</div>
            )}
            <div className={styles.statsContainer}>
                <StatsComponent name="Repos" number={public_repos}/>
                <StatsComponent name="Followers" number={followers}/>
                <StatsComponent name="Following" number={following}/>
            </div>
        </div>
    )
}