export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/";
const clientId = "f206725080b048d2bb744ca0477b551a";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]; /* lorsque vous utilisez l'API de Spotify dans votre application, vous devez spécifier les types de fonctionnalités spécifiques que vous souhaitez utiliser. Les scopes représentent ces types de fonctionnalités. */

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; /*  lorsque les utilisateurs cliquent sur l'URL de connexion, ils sont redirigés vers la page d'autorisation de Spotify où ils se connectent à leur compte et autorisent votre application. */