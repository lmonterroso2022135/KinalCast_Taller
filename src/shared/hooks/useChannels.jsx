import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest, getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [channels, setChannels] = useState(null)
    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest()
        if (channelsData.error) {
            console.log(channelsData.e)
            return toast.error(
                channelsData.e?.response?.data ||
                'Ocurrio un error al buscar canales'
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels,
                followedChannels: []
            })
        }

        const followedChannelData = await getFollowedChannels()
        
        if(followedChannelData.error){
            return toast.error(
                followedChannelData.e?.response?.data || 'Error ocurrio al obtener canales seguidos'
            )
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChannels: channelsData.data.channels.filter(channel =>
                followedChannelData.data.followedChannels.inculdes(channel.id)) 
        })
    }

    return {
        getChannels,
        isFectching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels
    
    }
}


