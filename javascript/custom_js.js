const dob = new Date(1988, 11, 26);
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms); 
var ageSpan = document.getElementsByClassName('about-me-age-span');

console.log(ageSpan.length);

for(ageSpanVar = 0; ageSpanVar < ageSpan.length; ageSpanVar++ ){
    ageSpan[ageSpanVar].innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970);
}
