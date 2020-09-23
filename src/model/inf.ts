
/**
 * @deprecated
 * use generated api interface
 */
export interface Thread {
    user: User
    uId: string
    title: string
    content: string
    link: string
    createdAt: number
    boardId: string
    thumb: string
    up: string
    down: string
    locked: boolean
    archived: boolean
}

/**
 * @deprecated
 * use generated api interface
 */
export interface BoardInfo {
    rules: string
    description: string
    moderators: number
    preview: Array<User>
    createdAt: number
    isMember: boolean
    isModerator: boolean
}

interface Filters {
    sortTime: string
    sortVote: string
    sortDirection: string
}

export interface User {
    username: string
    avatar: string
}

export interface UserCommunityContext {
    user: User
    communityOpinion: number
}