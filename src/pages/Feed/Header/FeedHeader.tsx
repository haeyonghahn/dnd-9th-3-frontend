import Avatar from "@/components/Avatar";
import { FeedHeaderCol, FeedHeaderItem, FeedHeaderItems, FeedHeaderSearch, FeedHeaderWrapper, FeedProfile, FeedProfileName, Wrapper } from "./FeedHeader.styled";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/atoms/user";
import Typography from "@/foundations/Typography";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const FeedHeader = () => {
	const user = useRecoilValue(userAtom);
	const [item, setItem] = useState(true);
	const handleHeaderItem = () => {
		setItem((prev) => !prev);
	}
	return (
		<>
			<Wrapper>
				<FeedHeaderWrapper>
					<FeedHeaderCol>
						<FeedHeaderItems>
							<FeedHeaderItem className={item ? "selected" : ""} onClick={handleHeaderItem}>
								<Link to="">최신</Link>
							</FeedHeaderItem>
							<FeedHeaderItem className={item ? "" : "selected"} onClick={handleHeaderItem}>
								<Link to="recommend">추천</Link>
							</FeedHeaderItem>
						</FeedHeaderItems>
					</FeedHeaderCol>
					<FeedHeaderCol>
						<FeedHeaderSearch>
						<svg
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
						</FeedHeaderSearch>
					</FeedHeaderCol>
				</FeedHeaderWrapper>
				{window.location.pathname === "/feed" ? (
					<>
					<FeedHeaderWrapper>
						<FeedProfile>
							<Avatar
								size="large"
								theme="isDark"
								src={user ? user.imageUrl : ""}
							></Avatar>
							<FeedProfileName>
								<Typography text={user ? user.name : ""} type="body2" />
							</FeedProfileName>
						</FeedProfile>
					</FeedHeaderWrapper>
					</>
					) : null}
			</Wrapper>
		</>
	)
}

export default FeedHeader;