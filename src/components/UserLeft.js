import React from 'react'

function UserLeft({data}) {
    return (
					<div className="publicInfo">
						<img id="image" src={data.avatar_url} alt={`User github profile`}></img>
						<div>
							<strong>{data.login}</strong>
						</div>
						<div>{data.bio === null ? "No Bio for user" : data.bio}</div>
						<div>
							<div>Followers : {data.followers}</div>
							<div>Following : {data.following}</div>
						</div>
						<div>
							{data.twitter_username === null
								? ""
								: `${data.twitter_username} on Twitter`}
						</div>
					</div>
				);
}

export default UserLeft
