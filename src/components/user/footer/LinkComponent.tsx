import imageUrls from "../utils/imageUrls"
import styles from './LinkComponent.module.css';
interface LinkProps{
    mainProp:string | null;
    name: string;
}
export default function LinkComponent(props:LinkProps){
    let {mainProp, name} = props;
    let isAvaliable = true;
    if(mainProp === null){
        mainProp = 'Not Avaliable';
        isAvaliable = false;
    }

    let textStatement: JSX.Element;
    if((name == 'blog' || name == 'company') && mainProp !== 'Not Avaliable'){
        let url: string;
        if(mainProp[0] !== '@'){
           url= mainProp.slice(8);
        }else{
            url = mainProp.slice(1);
        }
        textStatement = (
            <a href={`https://www.google.com/search?q=${url}`}>{mainProp}</a>
        )
    }else{
        textStatement = (
            <p>{mainProp}</p>
        )
    }
    return (
			<div className={`${styles.link} ${!isAvaliable ? styles.unavilable : ""}`}>
				<img src={imageUrls[name]} alt={name} />
				{textStatement}
			</div>
		);
}