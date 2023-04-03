function userInputFunction(x,y){
    return x+(3*y)
}


function replace(str,x,y)
{
    let n=str.length;
    let res="";
    for(let i=0;i<n;i++)
    {
        ch=str.charAt(i);
        if(ch=='x')
            res+=x.toString()
        else if(ch=='y')
            res+=y.toString()
        else 
            res+=ch;
    }
    console.log(res);
    return res;
}

function evaluate(exp)
{
    var value = eval(exp);
    return value;
}

function eulersResult(h,str,x0,y0,n){
    let xn=x0
    let yn=y0
    let xnPlus1=0;
    let ynPlus1Res=0
    let i=0;
    thead=result.appendChild(document.createElement("thead"))
    tr=thead.appendChild(document.createElement("tr"))
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="#"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="xn"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="yn"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="f(xn,yn)"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="yn+1"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="xn+1"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="f(xn+1,yn+1)"
    th=document.createElement("th");
    th.scope="col"
    tr.append(th)
    th.innerText="yn+1"
    
    tbody=result.appendChild(document.createElement("tbody"))
    while(n-->0)
    {

        fxn=evaluate(replace(str,xn,yn));
        let ynPlus1=parseFloat(yn+fxn*h);
        xnPlus1=parseFloat(xnPlus1+h);
        let fxnPlus1=evaluate(replace(str,xnPlus1,ynPlus1));
        ynPlus1Res=parseFloat(yn+(h/2)*(fxn+fxnPlus1));
        th=document.createElement("th")
        th.scope="row"
        th.style.width="3%"
        tr=tbody.appendChild(document.createElement("tr"))
        tr.style.padding="20px"
        tr.append(th)
        th.append(i)
        ++i;
        let td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(xn)
        tr.append(td)
        td=document.createElement("td");
        td.style.height="50px"
        td.style.width="10%"
        td.innerText=String(yn)
        tr.append(td)
        td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(fxn)
        tr.append(td)
        td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(ynPlus1)
        tr.append(td)
        td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(xnPlus1)
        tr.append(td)
        td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(fxnPlus1)
        tr.append(td)
        td=document.createElement("td");
        td.style.margin="20px"
        td.innerText=String(ynPlus1Res)
        tr.append(td)
        xn=parseFloat(xnPlus1);
        yn=parseFloat(ynPlus1Res);
    }
    return ynPlus1Res;
}

const element = document.getElementById("variablesForm");
const result = document.getElementById("answer");
const con=document.getElementById("con");
const table=document.getElementsByTagName("table");

element.addEventListener("submit", (event) => {
    event.preventDefault();
    let exp=String(event.target.exp.value);
    let h=event.target.h.value;
    h=parseFloat(h);
    console.log(typeof(h) );
    let x=parseFloat(event.target.x0.value);
    let y=parseFloat(event.target.y0.value);
    let n=parseInt(event.target.n.value);
    con.classList.remove("col-4")
    con.classList.remove("col-sm-4")
    con.classList.remove("container")
    con.classList.remove("d-none")
    element.style.display="none";
    result.style.display="block";
    eulersResult(h,exp,x,y,n)
});


