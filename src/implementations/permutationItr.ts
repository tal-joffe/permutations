const permutationItr = (str: string) => {
  // let results = []
  // const charArray = str.split('');
  // const originalCharMap = createCharMap(str)
  // results[0] = charArray
  // for (let position = 1; position < str.length; position++) {  
  //   let newResults = []
  //   for(let i = 0; i < str.length; i++){
  //     const char = str[i]
  //     newResults.push(
  //       [].concat(...results[position-1])
  //       .filter(x=> (x.split('').filter(x=> x===char).length) < originalCharMap.get(char))
  //       .map(x=>x+char))
  //   }
  //   results[position] = newResults
  // }
  // return [...new Set([].concat(...results[str.length-1]))].sort()
  return 'not migrated to ts yet'
}

function createCharMap(originalStr: string): Map<string, number> {
  const map: Map<string, number> = new Map()
  originalStr.split('').forEach(x => map.set(x, (map.get(x) || 0)  + 1));
  return map
}

export default permutationItr