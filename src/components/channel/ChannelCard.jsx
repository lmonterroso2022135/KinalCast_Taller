const imageUrl = 'https://picsum.photos/200/300?grayscale'

const ChannelAvatar = ({url}) => {
    console.log({url}, url || imageUrl)
    return(
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width='100%' height='100%' alt="userImage"/>
        </div>
    )
}
export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }
 
    return(
        <div className="channels-card" onClick={handleNavigate} >
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}