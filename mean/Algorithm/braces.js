const bv = (str) => {
    let stack = [];
    let count = {
        '{':0,
        '[':0,
        '(':0
    }
    for (let char = 0; char<str.length; char++){
        if (str[char] == '{' ){
            count['{']+=1;
            stack.push('{');
        }
        if (str[char] == '(' ){
            count['(']+=1;
            stack.push('(');
        }
        if (str[char] == '[' ){
            count['[']+=1;
            stack.push('[');
        }
        if (str[char] == ']'){
            if (count['[']<1){
                return false;
            }
            count['[']-=1;
            if(stack.pop()!='['){
                return false;
            }
        }
        if (str[char] == ')'){
            count['(']--;
            if (count['(']<1){
                return false;
            }
            if(stack.pop()!='['){
                return false;
            }
        }
        if (str[char] == '}'){
            if (count['{']<1){
                return false;
            }
            count['{']-=1;
            if(stack.pop()!='{'){
                return false;
            }
        }
    }
    return true;
}

console.log(bv('()({)))))}){)}'));