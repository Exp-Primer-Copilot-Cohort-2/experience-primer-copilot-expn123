function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        getSkills: function() {
            return this.skills;
        }
    };
    return member;
}