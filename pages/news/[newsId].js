import {useRouter} from 'next/router';

function somethingImportant(){
    const router=useRouter();
    const newsId=router.query.newsId;
    return(<>
        <h1>Something important</h1>
    </>)
}
export default somethingImportant