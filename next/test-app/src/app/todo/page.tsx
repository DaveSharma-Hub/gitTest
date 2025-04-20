import ClientAddNew from './ClientAddNew';

const dbQuerySim = (data: string[]): Promise<string[]> =>{
    return new Promise((res)=>setTimeout(()=>{
        res(data)
    },1000 + Math.random()*2000))
} 

export default async function Todo(){
    const data: string[] = await dbQuerySim(["Stuff", "todo", "in", "my","cool","list"]);

    return (
        <div>
            My Todo App
            <ClientAddNew data={data}/>
        </div>
    )
}