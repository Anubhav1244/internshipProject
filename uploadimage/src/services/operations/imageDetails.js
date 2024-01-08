import { imageDetails } from "../apis"
import {toast} from "react-hot-toast"
import {apiConnector} from "../apiConnector"

const {
  UPLOAD_IMAGE,
  GET_ALL_IMAGE,
  IMAGE_COUNT
} = imageDetails

export const uploadImage = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    //console.log("checkpoint 2")
    try {
      const response = await apiConnector("POST", UPLOAD_IMAGE, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      //console.log("CREATE COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Upload Image")
      }
      toast.success("Image Uploaded Successfully")
      result = response?.data?.data
    } catch (error) {
      //console.log("CREATE IMAGE UPLOAD API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

export const getAllImage = async (token) => {
  let result = null
  // const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET", GET_ALL_IMAGE, null, {
      Authorization: `Bearer ${token}`,
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Get All Image")
    }
    // toast.success("All Image fetched Successfully")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  // toast.dismiss(toastId)
  return result
}

export const increaseCount = async (id, token) => {
  let result = null
  // const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PUT", IMAGE_COUNT, {id}, {
      Authorization: `Bearer ${token}`,
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Increase Count")
    }
    // toast.success("Count Increased Successfully")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  // toast.dismiss(toastId)
  return result
}