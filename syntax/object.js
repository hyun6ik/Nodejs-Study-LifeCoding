var members = ['egoing', 'fkanwm','hyun6ik'];
console.log(members[1]);

var i =0;
while(i<members.length){
console.log('array loop', members[i]);
i++;
}

var roles = {
    'programmer' : 'egoing',
    'desinger' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.desinger);
console.log(roles['desinger']);

for(var name in roles)
{
    console.log('object =>', name, 'value =>', roles[name]);
}