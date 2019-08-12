const permutationRec = (str: string) : string[] =>{
  if (!str || str.length === 0){
    return []
  }
  if (str.length === 1){
    return [str]
  }
  const permutations: string[] = permutationRec(str.substring(1)) 
  // a, [bc, cb] => [abc, bac, bca, acb, cab, cba]
  return recStep(str[0], permutations);
}
const recStep = (firstLetter: string, permutations : string[]) => {
  const length: number = permutations[0].length
  return ([] as string[]).concat(...permutations.map((perm: string) => {
    return Array<string>(length + 1).fill(perm)
    .map((p: string, i :number) => p.slice(0, i) + firstLetter + p.slice(i, p.length))
  }))
}

export default permutationRec