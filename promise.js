let people=Number(prompt("enter a number"));
for(let i=0;i<people;i++)
{
    let time=new Promise((resolve,reject) =>
    {
        const random=Math.floor((Math.random()*9)+1)*1000;
        let call="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var text=call.charAt(Math.floor(Math.random()*call.length));;
        setTimeout(() => {
            resolve(text+" takes time " +  random);
        },random);
    })
async function myname()
{
    let a=await time;
    console.log(a);
}
await myname();
}