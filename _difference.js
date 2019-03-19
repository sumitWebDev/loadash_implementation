function _difference(arr1, arr2){
    return arr1.filter(function(obj){
        return arr2.indexOf(obj) == -1;}
);
}
_difference([1,2,3,4],[4,5,6]);
