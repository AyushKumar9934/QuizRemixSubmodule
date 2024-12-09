
import fs from 'fs/promises';


export async function getStoredLayout(){
    const rawFileContent=await fs.readFile('Layout.json',{encoding:'utf-8'});
    const data=JSON.parse(rawFileContent);
    const layout=data.id??1;
    return layout;
}
export function setLayout(id:number){
    return fs.writeFile('Layout.json',JSON.stringify({id:id || 5}))

}