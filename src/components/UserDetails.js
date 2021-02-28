import React, { useEffect, useState } from 'react'
import RepoList from './RepoList';
import UserLeft from './UserLeft';
import UserRight from './UserRight';

function UserDetails({data}) {

    const [repos, setRepos] = useState([])
    
    useEffect(() => {
        
     	fetch(`https://api.github.com/users/${data.login}/repos`)
					.then((data) => data.json())
					.then((data) => setRepos(data))
        
	
    }, [data])

    return (
					<div className="usercontainer">
						<div className="detailsContainer">
							<UserLeft data={data}/>
                             <UserRight data={data}/>
							
						</div>
						<div>
							<div id="namerepo">{data.login}'s Repos</div>
							<div className="repoContainer">
								{repos.map((repos,i) => (
									<RepoList key={i} details={repos} />
								))}
							</div>
						</div>
					</div>
				);
}

export default UserDetails
