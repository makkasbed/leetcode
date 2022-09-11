/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let checkAgainst = ransomNote.split('')
        let check = magazine.split('')
        let text =''
        for(let i=0; i < checkAgainst.length; i++){
            
            if(check.includes(checkAgainst[i])){
                text+=checkAgainst[i]
                check.splice(check.indexOf(checkAgainst[i]), 1)
            }
            if (ransomNote == text) return true
    
         } 
         return false
};
console.log(canConstruct('aab','baa'));