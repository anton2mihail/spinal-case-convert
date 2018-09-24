function spinalCase(str) {
    let preAns = str.replace(/[ _-](?=[A-Za-z])|[A-Z]/g, (i) => {
        switch (i){
            case " ":
            return "-";
            case "_":
            return "-";
            case "-":
            return i;
            default:
            return " "+i.toLowerCase();
    }
});
    let ans = preAns.replace(/[-](?=[ ])|[ ](?=[a-z])/g, (i)=>{
        return (i == "-")? "":"-";
    });
    let check = ans.split("");
    if(check[0] == "-"){
        check[0] = "";
    }
    ans = check.join("");

    return ans;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");