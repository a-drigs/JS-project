let superTeam = {
    members: []
};

superTeam.title = prompt("Enter name of the team:");
superTeam.leader = prompt("Enter name of the team's leader:");
superTeam.members = prompt("Enter names of the members of the team (names separated by commas):").split(', ');
superTeam.agenda = prompt("Enter what are the goals and ideas of the team:");
let isEvil = prompt("Your team is evil?(y/n)");

function goodEOrEvil() {
    if (isEvil == 'y') {
        superTeam.isEvil = 'true';
    }
    else if (isEvil == 'n') {
        superTeam.isEvil = 'false';
    }
    else {
        superTeam.isEvil = 'Wrong input';
    }
};
goodEOrEvil();

console.log(superTeam.members);
alert("Here's the team:" + "\n"
+ "name - " + superTeam.title + "\n"
+ "leader - " + superTeam.leader + "\n"
+ "members - " + superTeam.members + "\n"
+ "memberCount - " + (superTeam.members.length + 1) + "\n"
+ "agenda - " + superTeam.agenda + "\n"
+ "isEvil - " + superTeam.isEvil
);