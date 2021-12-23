// Component generated with util/vox-create-component.js
import * as R from "ramda";
import React from "react";
import {AppHomeProps} from "./AppHome.types";
// import {AuthContext} from "./../../context/AuthContext";
import {UIButton, UIText, UIICon} from "./../../ui";
import * as apiPosts from "./../../service/posts";
import {Post} from "../../types/posts";
import {useHistory} from "react-router-dom";
import {CPNLoadingOverlay} from "./../../component";

export const AppHome: React.VFC<AppHomeProps> = ({...args}) => {
	// Context Here
	const history = useHistory();
	// const {clearSession} = React.useContext(AuthContext);
	// States Here
	const [posts, setposts] = React.useState<Post[]>([]);
	const [loading, setloading] = React.useState<boolean>(true);
	const [waiting, setwaiting] = React.useState<boolean>(false);
	const [empty, setempty] = React.useState<boolean>(false);
	const [error, seterror] = React.useState<boolean>(false);
	// Effects Here
	React.useEffect(() => {
		(async () => {
			try {
				const response: Post[] = await apiPosts.getAllPosts();
				if (response && response.length) {
					setposts(response);
				} else if (response.length === 0) {
					setempty(true);
				}
				setloading(false);
			} catch (error) {
				seterror(true);
			}
		})();
	}, []);
	// Handlers Here
	const deletePostById = async (postId: string) => {
		setwaiting(true);
		try {
			const response = await apiPosts.deletePost(postId);
			if (response) setposts(R.filter((p: Post) => p.postId !== postId)(posts));
		} catch (error) {
			alert("Something wrong, please try again");
		}
		setwaiting(false);
	};
	const newPost = () => history.push("/AppPost/NEW_POST");
	return (
		<div>
			{waiting && <CPNLoadingOverlay message="Loading..." />}
			<div className="header mb-7 flex justify-center items-center">
				<div className="info flex flex-col flex-1">
					<UIText preset="HEADLINE" color="PRIMARY">
						News!!
					</UIText>
					<UIText preset="BODY">Capstone news project</UIText>
				</div>
				<div className="action">
					<UIButton label="Criar novo post" onClick={newPost} />
				</div>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : empty || error ? (
				<div className="empty p-7 bg-gray-disabled mb-7">
					<UIText preset="HEADLINE_06">Nothing to show here :(</UIText>
				</div>
			) : posts && !R.isEmpty(posts) ? (
				<>
					{posts.map((p) => (
						<div
							key={p.postId}
							className="card border border-gray-disabled p-4 rounded-lg shadow-sm flex flex-row mb-7">
							<div className="content flex-1 pr-4">
								<div className="header mb-4 flex flex-row justify-between">
									<UIText preset="HEADLINE_06">{p.title}</UIText>
									<div className="flex flex-row gap-1">
										<UIICon name="trash" color="DANGER" onClick={() => deletePostById(p.postId)} />
										<UIICon
											name="edit"
											color="DARK"
											onClick={() =>
												history.push(
													`/AppPost/${p.postId}/${JSON.stringify({
														title: p.title,
														description: p.description,
													})}`,
												)
											}
										/>
									</div>
								</div>
								<div className="body">
									<UIText preset="BODY">{p.description}</UIText>
								</div>
							</div>
							{p.attachmentUrl && (
								<div
									className="image bg-gray-disabled bg-center self-center"
									style={{
										width: 100,
										height: 100,
										backgroundImage: `url(${p.attachmentUrl})`,
										backgroundPosition: "center",
										backgroundSize: "cover",
									}}
								/>
							)}
						</div>
					))}
				</>
			) : (
				<div className="empty p-7 bg-gray-disabled mb-7">
					<UIText preset="HEADLINE_06">Something wrong :(</UIText>
				</div>
			)}
		</div>
	);
};

export default AppHome;
