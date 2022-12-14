import React,{useState,useEffect} from 'react';
import Image from 'next/image';

function ProfileInfo({name,setname,save,capital}:any) {
    const [input,isInput] = useState(false)
    const [followers,setFollowers] = useState(0);

    useEffect(() => {
        // handle info 
    },[])

    return (
    <div className="Mulish ">
        <div className ='font-[900] text-[4rem] leading-[6rem] text-textSecondary opacity-[80%] flex'>
            {input?
            <input  className='max-w-[26rem] h-[6rem] p-2 border rounded-md'
                    value={name}
                    onChange={(e)=>setname(e.target.value)}/>:
            <h1>{name}</h1>}
            {!save&&<button onClick={()=>isInput(p=>!p)} className='ml-5'>
                {input?
                <Image src={'/tick.svg'} alt='edit' width={50} height={50}/>:
                <Image src={'/edit.svg'} alt='edit' width={50} height={50}/>}
            </button>}
        </div>

        <div className="flex justify-between font-[200] leading-[2.5rem]">
            <div>
                <h2 className ='font-[900] text-[3rem]  text-secondary opacity-[80%]'>
                {followers}</h2>
                <p>Followers</p>
            </div>
            <div>
                <h2 className ='font-[900] text-[3rem]  text-secondary opacity-[80%]'>
                ${capital}</h2>
                <p>Capital</p>
            </div>
            <div>
                <h2 className ='font-[900] text-[3rem]  text-secondary opacity-[80%]'>
                {5}</h2>
                <p>Rank</p>
            </div>
        </div>
    </div>
    )
}

export default ProfileInfo