import React from 'react'

function UserRight({data}) {
    return (
					<div className="gitInfo">
						<div>
							 {data.location === null ? "Location Unavailabe" :`In ${data.location}`}
						</div>
						<div> {data.company === null ? "" : `Company: ${data.company}`}</div>
						<div>Public Repos: {data.public_repos}</div>
						<div>
							Public Gists: {data.public_gists === null ? "No gists yet" : data.public_gists}
						</div>
						<div>{data.hireable === null ? "" : data.location}</div>
					</div>
				);
}

export default UserRight
