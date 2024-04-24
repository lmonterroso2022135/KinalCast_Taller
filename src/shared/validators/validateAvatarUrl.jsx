export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/

    return regex.test(url)
}
export const validateAvatarUrlMessage = 'Ingrese una Url'