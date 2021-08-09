const show=()=>{
var a=document.getElementById("input").value.toUpperCase();
var b=document.getElementById("text").value.toUpperCase();
c=a.match(/\w+/g);
b=b.match(/\w+/g);
var sum=0;
for(i=0;i<b.length;i++)
{
    if(c.indexOf(b[i])>-1){
      if(a.length==1)
      document.getElementById("answer").value=`alphabet no. ${i+1}`;
      else
      document.getElementById("answer").value=`word no.  ${i+1}`;
      sum++;
    }
}
if(sum==0){
    document.getElementById("answer").value="this is not found";
}
}