function same(arr1,arr2){

    if(arr1.length !== arr2.length) return false;
    
    const counter1 = {};
    const counter2 = {};

    for(var i = 0;i < arr1.length;i++){
        counter1[arr1[i]] ? counter1[arr1[i]] +=1 : counter1[arr1[i]] = 1;
    }
    for(var i = 0;i < arr2.length;i++){
        counter2[arr2[i]] ? counter2[arr2[i]] +=1 : counter2[arr2[i]] = 1;
    }


    for(item in counter1){
        if(!(item**2 in counter2)) return false;
        if(counter1[item] !== counter2[item**2]) return false;
    }

// { '1': 1, '3': 3, '4': 2 } == { '1': 1, '9': 3, '16': 2 }

    return true;
}

same([1,4,4,3,3,3],[1,16,16,9,9,9])