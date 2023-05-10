export declare global {
    type ITimeout = ReturnType<typeof setTimeout> | null
}