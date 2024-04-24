import { useState } from "react";
import {toast} from "react-hot-toast";
import { getChannelsDetails as getChannelsDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState();

    const getChannelsDetails = async (id) => {
        const responseData = await getChannelsDetailsRequest(id)
        console.log(responseData, "AAAAAAAAAAAAAAAAAA")
        console.log("ASKL:AKSA:LSKA:LSKALS:KA:SLKASL:KALS")
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la información del canal'
            )
        }
        console.log("jskdakdhajksdkdhkajshdkajsdhkasjd")
        setChannelDetails(responseData)
    }

    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelsDetails
    }
}