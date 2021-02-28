import React from 'react'
import '../CSS/Repolist.css'

function RepoList({details}) {
    return (
					<div className="repocon fill">
						<abbr title="Click to copy clone URL">
							<div className='reponameid' onClick={()=> navigator.clipboard.writeText(details.clone_url)}>
								{details.name}
							</div>
						</abbr>
					</div>
				);
}

export default RepoList
