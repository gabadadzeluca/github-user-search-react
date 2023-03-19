import GitHubData from "../../header/GitHubData";
import LinkComponent from "./LinkComponent";
import styles from './Footer.module.css';

export default function UserFooterComponent(props:{data:GitHubData, className: string}){ 
    const {location, blog, twitter_username, company} = props.data;
   
    return(
        <div className={`${styles.footerContainer} ${props.className}`}>
            <div>
                <LinkComponent mainProp={location} name='location'/>
                <LinkComponent mainProp={blog === '' ? null : blog} name='blog'/>
            </div>
            <div>
                <LinkComponent mainProp={twitter_username} name='twitter_username'/>
                <LinkComponent mainProp={company} name='company'/>
            </div>
        </div>
    )
}