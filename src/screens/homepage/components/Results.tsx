import React from 'react'

const Results: React.FunctionComponent<{results: string[]}> = (props) => {
  return <ol>{props.results.map(result => <li>{result}</li>)}</ol>
}

export default Results