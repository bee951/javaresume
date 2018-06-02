var firstname='Benjamin';
var lastname='Easterwood';
var firstnameU=firstname.toUpperCase();
var lastnameU=lastname.toUpperCase();
console.log('Name: '+firstnameU+' '+lastnameU);
var field='Aerospace Engineer/ Cashier';
console.log('Field: '+field);
function displayPosition(company,title,description) {
    console.log(title+' at '+company+' - '+description)
}
function displaySkill(skill) {
    var skillc=skill.c
    if (Boolean(skillc=='cool')) {
        console.log('* BAM: '+skill.skill)
    } else {
        console.log('* '+skill.skill)
    }
}
var person='Stuck finding a job in my field education'
console.log('Description: '+person)
var intersts=['Tanks', 'Guns', 'Space Exploration','Aircraft'];
console.log('');
console.log('My Interests:');
for (let index = 0; index < intersts.length; index++) {
    console.log('* '+intersts[index])
}
console.log('')
var experience=['Aerospace Engineering Degree','Running a cash register']
var title=['University of Alabama in Hunstville','Piggly Wiggly']
var description=['participated in various project including the design of a wind turbine blade','handled transactions and assisted customers finding items']
console.log('My Previous Experiences:')
for (let index = 0; index < title.length; index++) {
    displayPosition(title[index],experience[index],description[index]);
    
}
console.log('');
var skils=[{skill:'Tuba', c:'cool'},{skill:'Math',c:''},{skill:'Aerospace Engineering',c:'cool'},{skill:'speed reading',c:''}]
console.log('My Skils:');
for (let index = 0; index < skils.length; index++) {
    displaySkill(skils[index])
    
}