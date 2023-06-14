import { app, storage } from "../Firebase/Config";
import {ref, listAll, getDownloadURL} from "firebase/storage";
import { useEffect,useState } from "react";


export const useFetchBucket = ()=>{
    const [files,setFiles] = useState();
    const [loading, setLoading] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    useEffect(()=>{
        async function loadData(){
            setLoading(true);

            try{

                
            const bucketRef = ref(storage);
            const files = await listAll(bucketRef);
            const urls = await Promise.all(
                files.items.map(
                    async (file) => {
                        const url = await getDownloadURL(file);
                        return url;
                    }
                )
            )
            setFiles(urls);

            }catch(e){
                console.log(e.message);
            }

        }
        loadData();
    },[])

    return {files, loading};


}