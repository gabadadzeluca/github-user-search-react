import GitHubData from "../../header/GitHubData"
import UserBodyComponent from "../body/UserBodyComponent";
import UserHeaderComponent from "../header/UserHeaderComponent";
import UserFooterComponent from "../footer/UserFooterComponent";
import styles from './Container.module.css';

export default function UserContainerComponent(props:{
    data: GitHubData;
}){
    const data = props.data;
    return(
        <div className={styles.card}> 
            <UserHeaderComponent data={data} className={styles.headerContainer}/>
            <UserBodyComponent data={data} className={styles.bodyContainer}/>
            <UserFooterComponent data={data} className={styles.footerContainer}/>
        </div>
    )
}