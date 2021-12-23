// Component generated with util/vox-create-component.js
import React from "react";
import {AppPostWrapper} from "./AppPost.styled";
import {AppPostProps} from "./AppPost.types";
import {UIButton, UIText} from "./../../ui";
import {CPNTextInput, CPNTextarea, CPNLoadingOverlay} from "./../../component";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as apiPosts from "./../../service/posts";
import {Post} from "../../types/posts";
import {http} from "../../service/api/capstone-api";
import axios from "axios";

type PostForm = {
	readonly title?: string;
	readonly image?: any;
	readonly description: string;
};

const useQuery = () => {
	const {search} = useLocation();
	return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const AppPost: React.VFC<AppPostProps> = ({...args}) => {
	// Context Here
	const {postid, post} = useParams<any>();
	const history = useHistory();
	// Form
	const {
		register,
		handleSubmit,
		setValue,
		formState: {errors},
	} = useForm<PostForm>({
		mode: "onSubmit",
	});
	// States Here
	const [loading, setloading] = React.useState<boolean>(false);
	// Effects Here
	React.useEffect(() => {
		if (postid && post) {
			const newPost: Post = JSON.parse(post);
			setValue("title", newPost.title);
			setValue("description", newPost.description);
		}
	}, [postid, post, setValue]);
	// Handlers Here
	const submitCreate = handleSubmit(async ({title, description, image}) => {
		setloading(true);
		try {
			const response = await apiPosts.createPost({title, description});
			if (response && response.attachUrl) {
				const file = image[0];
				console.log("image: ", file);
				if (file) {
					await axios.put(response.attachUrl, file, {
						headers: {
							"Content-Type": "image/png",
						},
					});
				}
			}
			if (response) history.goBack();
		} catch (error) {
			console.log("error: ", error);
			alert("Something wrong, please try again");
		}
		setloading(false);
	});
	const submitUpdate = handleSubmit(async (data) => {
		setloading(true);
		try {
			const response = await apiPosts.updatePost(postid, data);
			if (response) history.goBack();
		} catch (error) {
			alert("Something wrong, please try again");
		}
		setloading(false);
	});
	return (
		<AppPostWrapper {...args}>
			{loading && <CPNLoadingOverlay message="Loading..." />}
			<div className="header mb-7 flex justify-center items-center">
				<div className="info flex flex-col flex-1">
					<UIText preset="HEADLINE" color="PRIMARY">
						{postid === "NEW_POST" ? "Create new Post!!" : "Update post"}
					</UIText>
					{postid === "NEW_POST" ? (
						<UIText preset="BODY">Create a new post for capstone project</UIText>
					) : (
						<UIText preset="BODY">Update a pos for capstone project</UIText>
					)}
				</div>
			</div>
			<div className="form mt-4 flex flex-col gap-4">
				<div>
					<CPNTextInput
						label="Title"
						placeholder="Title"
						{...register("title", {
							required: {
								value: true,
								message: "Title is required",
							},
						})}
						error={errors.title?.message}
					/>
				</div>
				{postid === "NEW_POST" && (
					<div>
						<CPNTextInput
							label="Image"
							placeholder="Select a image"
							type="file"
							{...register("image", {
								required: {
									value: true,
									message: "Image is required",
								},
							})}
							error={errors.image?.message}
						/>
					</div>
				)}
				<div>
					<CPNTextarea
						label="Description"
						{...register("description", {
							required: {
								value: true,
								message: "Description is required",
							},
						})}
						error={errors.description?.message}
					/>
				</div>
				<div className="flex flex-row justify-between mt-4">
					<UIButton label="cancel" outline preset="DARK" onClick={() => history.goBack()} />
					<UIButton
						label={postid === "NEW_POST" ? "create" : "update"}
						onClick={postid === "NEW_POST" ? submitCreate : submitUpdate}
					/>
				</div>
			</div>
		</AppPostWrapper>
	);
};

export default AppPost;
