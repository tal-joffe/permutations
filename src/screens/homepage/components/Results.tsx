import React from 'react'

const Results: React.FunctionComponent<{results: string[]}> = (props) => {
  return <ol>{props.results.map((result, i) => <li key={i}>{result}</li>)}</ol>
}

export default Results