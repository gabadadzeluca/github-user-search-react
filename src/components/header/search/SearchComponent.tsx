import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubData from '../GitHubData';
import styles from './SearchComponent.module.css';
interface MyComponentProps{
    updateData: (value:GitHubData) => void;
}

export default function SearchComponent(props : MyComponentProps) : JSX.Element{
    const updateData = props.updateData;
    const placeholder = 'Search GitHub username…';
    const url = 'https://api.github.com/users/';

    useEffect(()=>{
        searchUser('octocat');
    },[]);
    
    const [inputValue, setInputValue] = useState<string>('');

    async function searchUser(value:string) {
        try{
            let user = await axios.get(url + value);
            console.log("Data: ",user.data);
            updateData(user.data);
        } catch (err){
            console.log(err);
        }
    }

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }
    const startSearch = (value:string):void=>{
        if(value.trim() === '') return;
        searchUser(value);
        setInputValue('');
    }


    return (
        <div className={styles.searchContainer}>
            <input type='text' placeholder={placeholder} onChange={updateValue} value={inputValue} className={styles.input}/>
            <button onClick={()=>{startSearch(inputValue)}} className={styles.searchBtn}>Search</button>
        </div>
    )
}