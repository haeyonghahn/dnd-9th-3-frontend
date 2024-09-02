import FeedHeader from "./Header/FeedHeader";
import Recommend from "./Recommend/Recommend";

const Feed = () => {
	return (
		<>
			<FeedHeader />
			{window.location.pathname === "/feed" ? 
				<>
					<div style={{ width: "500px", height: "100%", backgroundColor: "gray" }}></div>
				</> : 
				<Recommend /> }
			
		</>
    );
}

export default Feed;