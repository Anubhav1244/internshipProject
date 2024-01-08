import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "../components/common/loader.css";
import { uploadImage } from "../services/operations/imageDetails";
import { getAllImage } from "../services/operations/imageDetails";
import Card from "../components/core/Dashboard/Card";
import { increaseCount } from "../services/operations/imageDetails";
const Dashboard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const [allImages, setAllImages] = useState([]);
    const getImages = async () => {
        setLoading(true);
        const result = await getAllImage(token);
        setAllImages(result);
        console.log(result);
        setLoading(false);
    };

    useEffect(() => {
        getImages();
        console.log("All Images: ", allImages);
    }, []);

    const handleImageUpload = (e) => {
        console.log("image: ");
        console.log("image: ", e.target.files[0]);
    };
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("Imagefile", data.file[0]);
        formData.append("name", data.Name);
        formData.append("description", data.description);
        formData.append("email", data.Email);
        setLoading(true);
        const result = await uploadImage(formData, token);
        console.log(result);
        setAllImages([...allImages, result]);
        setLoading(false);
    };
    const increaseCounter = async (id) => {
        const result = await increaseCount(id, token);
        console.log(result);
        getImages();
    }

    return (
        <div className=" bg-gray-950 w-screen min-h-[calc(100vh-3.5rem)] text-white ">
            <div className="w-full min-h-[calc(100vh-3.5rem)] flex justify-center items-center">
                <div className="w-[40%] flex flex-col">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex gap-4 flex-col"
                    >
                        <div>
                            <div className="flex flex-col">
                                <label htmlFor="file">Upload File</label>
                                <input
                                    className="text-white w-[40%]"
                                    type="file"
                                    name="file"
                                    id="file"
                                    placeholder="Upload File"
                                    onChange={handleImageUpload}
                                    {...register("file", { required: true })}
                                />
                                {errors.file && <span>File is required.</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Name">
                                    Name<sup>*</sup>
                                </label>
                                <input
                                    className="text-black w-[40%]"
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Enter name"
                                    {...register("Name", { required: true })}
                                />
                                {errors.Name && <span>Name is required.</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Email">
                                    Email<sup>*</sup>
                                </label>
                                <input
                                    className="text-black w-[40%]"
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="Enter email"
                                    {...register("Email", { required: true })}
                                />
                                {errors.Email && (
                                    <span>Email is required.</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Desc">
                                    Description<sup>*</sup>
                                </label>
                                <textarea
                                    className="text-black w-[40%]"
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter description"
                                    {...register("description", {
                                        required: true,
                                    })}
                                />
                                {errors.description && (
                                    <span>Image Description is required.</span>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className=" border border-yellow-400 bg-yellow-400 rounded-sm w-[40%] py-1 px-3"
                            disabled={loading}
                        >
                            Upload
                        </button>
                    </form>
                </div>
                <div className="w-[40%]"></div>
            </div>
            {loading ? (
                <span className="loader"></span>
            ) : (
                <div className="flex h-full w-full justify-around gap-10 flex-wrap">
                    {allImages.map((image) => (
                        <Card
                            image={image.url}
                            count={image.count}
                            name={image.name}
                            description={image.description}
                            id={image._id}
                            key={image._id}
                            increaseCounter={increaseCounter}
                        ></Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
