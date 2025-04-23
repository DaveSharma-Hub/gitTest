"use client"
import {FormEvent, useState} from 'react';

export default function ClientAddNew({data}:{data:string[]}){
    const [items, setItems] = useState<string[]>(data);
    const [newItem, setNewItem] = useState<string | null>(null);

    const handleAddNewItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newItem && newItem.length>0){
            setItems((items)=>[newItem, ...items]);
            setNewItem(null);
        }
    }

    return (
        <div>
            My Todo App
            <form onSubmit={handleAddNewItem}>
                <input value={newItem || ''} onChange={(e)=>setNewItem(e.target.value)}/>
                <button type="button" onClick={()=>setNewItem(null)}>Clear</button>
            </form>
            <div>
                {items?.map((item, index)=>{
                    return (
                        <div key={index}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}