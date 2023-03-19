import styles from './Stats.module.css';

export default function StatsComponent(props:{name: string, number:number}){
    const {name, number} = props;
    return (
        <div className={styles.stat}>
            <p className={styles.name}>{name}</p>
            <p className={styles.number}>{number}</p>
        </div>
    )
}