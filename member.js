function skillsMember() {
    return {
        restric: "E",
        templateUrl: "modules/skills/views/member.html",
        controller: "SkillsMemberController",
        contollerAs: "vm",
        bindToContoller: true,
        scope: {
            member: "m"
        }
    };
}