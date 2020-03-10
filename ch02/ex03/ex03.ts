export declare function addEventListener(str: string, func: () => void, state?: boolean | Prop): void

type Prop = {
    capture?: boolean,
    once?: boolean,
    passive?: boolean
}
