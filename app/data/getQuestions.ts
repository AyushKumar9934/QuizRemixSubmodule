import fs from 'fs/promises'



export async function getAllQuestion() {
    const rawFile=await fs.readFile('questions.json',{encoding:'utf-8'});
    const questinonArray=JSON.parse(rawFile);
    const storeQuestion=questinonArray??[];
    return storeQuestion;
    
}