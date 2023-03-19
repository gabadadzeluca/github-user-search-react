import location from '../../../assets/icon-location.svg';
import twitter from '../../../assets/icon-twitter.svg';
import company from '../../../assets/icon-company.svg';
import blog from '../../../assets/icon-website.svg';

interface ImageUrls{
    [key:string] : string;
}
const imageUrls:ImageUrls= {
    'location': location,
    'twitter_username': twitter,
    'company': company,
    'blog': blog
}

export default imageUrls;