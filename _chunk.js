function _chunk(arr, size){
  var dupArray = arr;
  if(typeof arr == "string"){
    var stringArray = [];
    for(var k =0; k< arr.length;k++){
      stringArray.push(arr.charAt(k));
    }
    dupArray =stringArray;
  }
  var chunkedArray = [];
  var totalArray = [];
  var count = 0, flag = 0, loopcount = 0;
    for(var i = 0; i<dupArray.length/size;i++){
      for(var j = count; j<dupArray.length;j++){
        if(loopcount < size){
          chunkedArray.push(dupArray[j]);
        }
        loopcount++;
      }
      totalArray.push(chunkedArray);
      chunkedArray = [];
      count = count+size;
      loopcount = 0;
    }
    console.log(totalArray);
    return totalArray;
}

/*test cases covered*/
_chunk("abcdefg",4);
_chunk("abc",4)
_chunk([1,2,3],4);
_chunk([1,2,3,5,6],1);
_chunk([1,2,3,5,6],2);
