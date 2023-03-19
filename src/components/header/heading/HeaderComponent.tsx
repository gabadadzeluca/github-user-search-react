import moonImg from '../../../assets/icon-moon.svg';
import sunImg from '../../../assets/icon-sun.svg';
import styles from './HeaderComponent.module.css';

export default function HeaderComponent(props:{
    darkMode : boolean;
    setDarkMode(value: boolean): void;
}){

    const darkMode = props.darkMode;
    const toggleMode = ():void =>{
        props.setDarkMode(!darkMode);
        document.documentElement.className = darkMode ? '' : 'darkMode';
    }
    let mode:string = darkMode ? 'light' : 'dark';
    let imageSrc:string = darkMode ? sunImg : moonImg;
    return(
        <div className={styles.headerContainer}>
            <h2 className={styles.heading}>devfinder</h2>
            <div onClick={toggleMode} className={styles.modeToggleDiv}>
                <p>{mode}</p>
                <img src={imageSrc} alt={mode} />
            </div>
        </div>
    )
}